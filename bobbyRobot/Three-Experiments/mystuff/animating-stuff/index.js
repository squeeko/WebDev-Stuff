import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let paused = false;
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 1;
camera.position.y = 20;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

const radius = 1.0;

// const geometry = new THREE.BoxGeometry();
// const radius = 1.0;
const geometry = new THREE.SphereGeometry(radius);

// const material = new THREE.MeshBasicMaterial({color: 0xFFFF00});
// const material = new THREE.MeshNormalMaterial();
const material = new THREE.MeshNormalMaterial({ flatShading: true});

function getBall() {
const mesh = new THREE.Mesh(geometry, material);
    let x = THREE.MathUtils.randFloatSpread(10);
    let z = THREE.MathUtils.randFloatSpread(10);
    mesh.position.x = x
    mesh.position.z = z
    mesh.rotation.x = THREE.MathUtils.randFloatSpread(Math.PI);
    const velocity = {
        x: THREE.MathUtils.randFloatSpread(0.1),
        z: THREE.MathUtils.randFloatSpread(0.1),
    };

    const dampingMult = 0.98;
    const repelStrength = 0.001;
    
    // const rote = THREE.MathUtils.randFloatSpread(0.2);
    function update (allBalls) {
        velocity.x *= dampingMult;
        velocity.z *= dampingMult;
        x += velocity.x;
        z += velocity.z;
        mesh.position.x = x
        mesh.position.z = z

        const direction = new THREE.Vector3(0, 0, 0);
        allBalls.forEach(b => {
            const distance = b.mesh.position.distanceTo(mesh.position);

            if (distance < radius * 2) {
                direction.subVectors(b.mesh.position, mesh.position)
                    .normalize()
                    .multiplyScalar(repelStrength);
                b.velocity.x += direction.x;
                b.velocity.z += direction.z;
            }
        });
    }

    return {
        update,
        mesh,
        velocity
    };
}

const balls = [];
let numBalls = 30;
for (let i = 0; i < numBalls; i += 1){
    let ball = getBall();
    scene.add(ball.mesh);
    balls.push(ball);
}


function animate() {
    requestAnimationFrame(animate);
    if (paused === false) {
        balls.forEach (b => b.update(balls));
    }
    // ball.rotation.x += 0.01;
    // ball.rotation.y += 0.02;
    renderer.render(scene, camera);
}

animate();

function handleKeyDown (evt) {
    const {key} = evt;
    const ESC = "Escape";
    if (key === ESC) {
        paused = !paused;
    }
    console.log(evt);
}
window.addEventListener('keydown', handleKeyDown);

index.html
 <tr> - table row
 <td> - defines the cell of a table that contains data and is a child of the <tr> element
 <nav> - a section of a page to provide navigation links, sections can be menus, tables of contents and indexes.
 <div> - just to organize flow content that can be id'd, class'd to be styled by CSS and has no effect on content or layout.

style.css
*::-webkit-scrollbar - the entire scrollbar and we use the property "width: 0" makes the scrollbar in essence disappear.
position: https://developer.mozilla.org/en-US/docs/Web/CSS/position
<script> - used to embed exxecutable code or data, typically used to embed or refer to JavaScript code.
backdrop-filter - applies blurring or color shifting to the area behind an element.
justify-content - https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
unset!important - resets the original value of a child element after it may have been changed

app.js
three.js needs four things: camera, scene, renderer and lighting.
renderers - in this case WebGLRenderer - uses WebGL to render - https://threejs.org/docs/index.html?q=render#api/en/renderers/WebGLRenderer,
 
scene - where you place the objects, lights and cameras - https://threejs.org/docs/index.html?q=scene#api/en/scenes/Scene

light - in this case AmbientLight illuminates all objects in the scene equally, and also DirectionalLight - https://threejs.org/docs/index.html?q=light#api/en/lights/AmbientLight and https://threejs.org/docs/index.html?q=light#api/en/lights/DirectionalLight

camera - in this case we I use the PerspectiveCamera as it mimics the way the human eye sees used most commonly. It has constructors (fov, aspect, near, far) - https://threejs.org/docs/index.html?q=camera#api/en/cameras/PerspectiveCamera

mixer - Use AnimationMixer which a player for animations on a particular object in the scene. The "clipAction" property allows for playing certain properties of the animation which are found using the "console.log" in the JS code and the Developer Console for the animation. 

GLTFLoader - delivers and loads 3D content. It can deliver one or more scensce, including meshes. materials, textures, skins, skeletons, morph targets, animations, lights and/or cameras - https://threejs.org/docs/#examples/en/loaders/GLTFLoader

gsap - GreenSock used for animating effects such as tweens, easing, motion path etc. GSAP has Ease Visualizer which has presets for easing, in this case I use the "power1.out" easing pattern. - https://gsap.com/docs/v3/, https://gsap.com/docs/v3/Eases

JavaScript calls as usual, document.getElementById, doucment.addEventListener
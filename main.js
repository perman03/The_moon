
    import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

    import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
    import { DragControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/DragControls.js';



let scene, camera, renderer, sphere, orbit, loader;

function begin(){
    //Define Scene and Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
scene.background = new THREE.Color('skyblue'); 
scene.fog = new THREE.Fog(0x76456c, 0.1, 8); 
loader = new THREE.TextureLoader(); 
loader.load("textures/bg.jpg", function (texture){
    scene.background = texture; 
})



renderer = new THREE.WebGL1Renderer({antialias: true}); 

renderer.setSize(window.innerWidth, window.innerHeight); 

document.body.appendChild(renderer.domElement);

//define geometry and color/texture
const geometry = new THREE.SphereGeometry( 1.5, 32, 32 );
const texture = new THREE.TextureLoader().load('textures/moon2.jpg')
const material = new THREE.MeshBasicMaterial( { map: texture } );
sphere = new THREE.Mesh( geometry, material );
scene.add( sphere )

orbit = new OrbitControls(camera, renderer.domElement)


// const geometry = new THREE.BoxGeometry( 1, 1, 1);
// const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );


camera.position.z = 5; 

}


function animate(){
    requestAnimationFrame(animate); 

   sphere.rotation.x += 0.01;
   sphere.rotation.y += 0.01; 

    renderer.render(scene, camera); 
}

//responsive image
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight; 
    camera.updateProjectionMatrix(); 
    renderer.setSize(window.innerWidth, window.innerHeight); 
}
window.addEventListener('resize', onWindowResize, false); 

begin(); 
animate(); 


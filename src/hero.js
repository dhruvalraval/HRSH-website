import * as THREE from 'three/build/three.module';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function threeRunner(){
    let scene, camera, renderer, man, modelsLoader, dracoLoader;
    const canvas = document.querySelector('.hero');
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
    scene.add(camera);
    
    renderer = new THREE.WebGLRenderer({
        canvas, 
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    

    let controls = new OrbitControls( camera, renderer.domElement );
    
   
    man = new THREE.Mesh();
    let loader = new GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( './src/gltf/' );
    loader.setDRACOLoader( dracoLoader );
    
    // modelsLoader.setDRACOLoader( dracoLoader );
    loader.load('/assets/fullmodel_COMP.glb', (glb) => {
        man.add(glb.scene);
        scene.add(man);
        man.position.set(0, 0,  0);
        man.scale.set(1, 1, 1);
        resolve(glb);
    })

    camera.position.set(0, 0, -50)
    controls.update();

    window.addEventListener("resize",function()
    {
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    });
    
    let animate = function(){
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        renderer.alpha = true;
        controls.update();
    }
    animate();
}


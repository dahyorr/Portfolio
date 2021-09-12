import {Scene, PerspectiveCamera, FogExp2, WebGLRenderer, Quaternion, Vector3, PointsMaterial, SphereGeometry, Points, Color} from 'three';
import {WEBGL} from '@/helpers/WebGL';
import {RefObject} from 'react';

const scene = new Scene();
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
const starQty = 45000;
let stars: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;

export const init = (element: RefObject<HTMLDivElement>) => {
    const HEIGHT = window.innerHeight;
    const WIDTH = window.innerWidth;
    const aspectRatio = WIDTH / HEIGHT;
    const fieldOfView = 75;
    const nearPlane = 1;
    const farPlane = 1000;
    camera = new PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.z = farPlane / 2;
    scene.fog = new FogExp2( 0x000000, 0.0003 );
    scene.background = new Color( 0x14110F );
    starForge()
    if (WEBGL.isWebGLAvailable()) {
        renderer = new WebGLRenderer({alpha: true});
    } else {
        const warning = WEBGL.getWebGLErrorMessage();
        if(element.current){
            return element.current.appendChild( warning );
        }
	    else{
            return console.log('No Webgl')
        }
    }

    renderer.setClearColor(0x000011, 1);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize( WIDTH, HEIGHT);
    const canvas = document.createElement('div');
    canvas.id = 'canvasContainer';
    canvas.appendChild(renderer.domElement)
    element.current && element.current.appendChild(canvas)
    window.addEventListener( 'resize', onWindowResize, false )
}

export const animate = () => {
    requestAnimationFrame(animate);
    render()
}

function render() {
    const rotationSpeed = 0.0003;
    var y_axis = new Vector3( 0, 1, 0 );
    var quaternion = new Quaternion;
    camera.position.applyQuaternion(quaternion.setFromAxisAngle(y_axis, rotationSpeed));
    camera.up.applyQuaternion(quaternion.setFromAxisAngle(y_axis, rotationSpeed));
    camera.lookAt( scene.position ); // the origin
    renderer.render(scene, camera);
}

const starForge = () => {
    
    const points: THREE.Vector3[] = []

    const materialOptions = {
            size: 0.1, 
            opacity: 0.7,
            color: 0xf6f2ff
        };

    const starStuff = new PointsMaterial(materialOptions);

    for (var i = 0; i < starQty; i++) {		
        const starVertex = new Vector3();
        starVertex.x = Math.random() * 2000 - 1000;
        starVertex.y = Math.random() * 2000 - 1000;
        starVertex.z = Math.random() * 2000 - 1000;
        points.push(starVertex);
    }
    const geometry = new SphereGeometry(1000, 100, 50).setFromPoints(points);


    stars = new Points(geometry, starStuff);
    scene.add(stars);
}

function onWindowResize() {

    // Everything should resize nicely if it needs to!
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(WIDTH, HEIGHT);
}
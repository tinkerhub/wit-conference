import "../scss/hero.scss";

import * as THREE from 'three';
import {ARButton} from 'three/examples/jsm/webxr/ARButton.js';

import {LETTER_MAP} from "../utils/utils";

const canvas = document.getElementById('boot-animation') as HTMLCanvasElement;

const scene = new THREE.Scene();
// Calculate the aspect ratio of the window
const aspectRatio = window.innerWidth / window.innerHeight;

// Define the frustum size
const frustumSize = 25;

// Create an orthographic camera
const camera = new THREE.OrthographicCamera(
    frustumSize * aspectRatio / -2, frustumSize * aspectRatio / 2,
    frustumSize / 2, frustumSize / -2,
    1, 100
);

camera.position.z = frustumSize;
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

function createTextTexture(text: string) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const color = Math.random() > 0.5;

    canvas.width = 128; // Adjust these dimensions based on your requirements
    canvas.height = 128;
    context.fillStyle = color ? '#ffffff' : '#ff4b00';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle =  color ? '#ff4b00' : '#ffffff';
    context.fillRect(10, 10, canvas.width - 20, canvas.height - 20);

    context.font = 'bold 130px monospace'; // Adjust font size and style as needed
    context.fillStyle = '#000000'; // Text color
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2 + 10);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
}


function createCube(x: number, y: number, z: number, cubeSize: number, imageUrl: string, text: string) {
    const imageTexture = new THREE.TextureLoader().load(imageUrl);
    const textTexture = createTextTexture(text);

    const materials = [
        new THREE.MeshBasicMaterial({map: textTexture}), // Right side
        new THREE.MeshBasicMaterial({map: textTexture}), // Left side
        new THREE.MeshBasicMaterial({map: textTexture}), // Top side - unchanged
        new THREE.MeshBasicMaterial({map: textTexture}), // Bottom side - unchanged
        new THREE.MeshBasicMaterial({map: imageTexture}), // Front side
        new THREE.MeshBasicMaterial({map: imageTexture}) // Back side
    ];

    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cube = new THREE.Mesh(geometry, materials);
    cube.position.set(x, y, z);
    cube.matrixAutoUpdate = true; // Ensure this is true unless you have a specific reason to manage matrices manually
    scene.add(cube);
    return cube;
}


function createTextFromCubes(letter, offsetX: number, offsetY: number, offsetZ: number, cubeSize = 1) {
    const pattern = letter.pattern;
    const cubeSpacing = cubeSize * 0.1;

    const cubes = []

    for (let y = 0; y < pattern.length; y++) {
        for (let x = 0; x < pattern[y].length; x++) {
            if (pattern[y][x] === '1' || pattern[y][x] === '0') {

                // Calculate position with spacing
                const posX = offsetX + (x * (cubeSize + cubeSpacing));
                const posY = offsetY - (y * (cubeSize + cubeSpacing)); // Assuming Y is up

                const X = posX + Math.random() * cubeSize * 10;
                const Y = posY + Math.random() * cubeSize * 10;
                const Z = offsetZ + Math.random() * cubeSize * 10;

                const {url, name} = letter.images.pop();

                const cube = createCube(X, Y, Z, cubeSize, url, letter.text);
                cube.rotation.y = pattern[y][x] === '0' ? Math.PI / 2 - 0.15 : 0.15;
                cubes.push({cube, posX, posY, posZ: offsetZ});
            }
        }
    }

    return cubes;
}

const cubes = [];
const offsets = [-22, -3, 15]
for (let i = 0; i < LETTER_MAP.length; i++) {
    cubes.push(...createTextFromCubes(LETTER_MAP[i], offsets[i], 0, 0, 3));
}

navigator.xr?.isSessionSupported('immersive-ar').then((supported) => {
    if (supported) {
        const arButton = ARButton.createButton(renderer);
        document.getElementById('ar-container').appendChild(arButton);
        renderer.xr.enabled = true;
        renderer.xr.setReferenceSpaceType('viewer');
        renderer.setAnimationLoop(() => animate());
    } else
        animate();
});


function animate() {
    if(!renderer.xr.enabled)
        requestAnimationFrame(animate);

    if(!renderer.xr.isPresenting && renderer.xr.enabled)
        return;

    // Update the picking ray with the camera and mouse position
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    cubes.forEach(({cube, posX, posY, posZ}) => {
        const dx = cube.position.x - posX;
        const dy = cube.position.y - posY;
        const dz = cube.position.z - (renderer.xr.enabled ? -30 : posZ);

        // Calculate distance from the cube to the mouse position
        if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1 && Math.abs(dz) < 0.1) {
            const mousePosition = new THREE.Vector3();
            raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 0, 1), posZ), mousePosition);

            const distance = Math.sqrt((mousePosition.x - cube.position.x) ** 2 + (mousePosition.y - cube.position.y) ** 2);

            if (distance < 4) { // Repulsion threshold, adjust as needed
                cube.rotation.x += 0.02;
            } else
                cube.rotation.x *= 0.9;
        } else {
            cube.rotation.x += 0.01 * (dx + dy);
            cube.position.x -= dx * 0.01;
            cube.position.y -= dy * 0.01;
            cube.position.z -= dz * 0.01;
        }
    });

    renderer.render(scene, camera);
}


let mouse = new THREE.Vector2(1000, 1000);

function onMouseMove(event: { clientX: number; clientY: number; }) {
    // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

window.addEventListener('mousemove', onMouseMove, false);


function onWindowResize() {
    // camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

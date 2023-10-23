
// main.js
import * as THREE from 'https://threejs.org/build/three.module.js';

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a torus
const geometry = new THREE.TorusGeometry(5, 1, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Set initial camera position
camera.position.z = 20;

// Handle scroll event
document.addEventListener('scroll', function () {
    // Adjust camera position based on scroll
    camera.position.z = 20 + window.scrollY * 0.05;

    // Render the scene
    renderer.render(scene, camera);
});

// Animation loop
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the torus
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
};

// Start the animation loop
animate();

const canvas = document.querySelector('canvas.webgl')

// sizes
const sizes = {
    width: 800,
    height: 600
}

// scene
const scene = new THREE.Scene()

// red cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 ) // shape
const material = new THREE.MeshBasicMaterial({ 
    color: '#ff0000' 
}) // material
const mesh = new THREE.Mesh(geometry, material) // object
scene.add(mesh)

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// renderer and canvas

const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
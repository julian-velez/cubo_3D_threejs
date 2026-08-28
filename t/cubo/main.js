// PASO 1: Crear la escena — es el "espacio vacío" donde vivirán todos los objetos 3D
const scene = new THREE.Scene();

// PASO 2: Crear la cámara — define desde dónde vemos la escena
// Parámetros: (campo de visión en grados, relación ancho/alto de la pantalla, distancia mínima visible, distancia máxima visible)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Alejamos la cámara 5 unidades en el eje Z, porque si se queda en 0
// estaría justo dentro del cubo y no veríamos nada
camera.position.z = 5;

// PASO 3: Crear el renderer — es quien "dibuja" la escena usando WebGL
const renderer = new THREE.WebGLRenderer();

// Le decimos qué tamaño debe tener el lienzo de dibujo (todo el ancho/alto de la ventana)
renderer.setSize(window.innerWidth, window.innerHeight);

// Insertamos el <canvas> que genera el renderer dentro del HTML de la página
document.body.appendChild(renderer.domElement);

// PASO 4: Crear la geometría — la forma matemática del cubo
// Parámetros: (ancho, alto, profundidad) en unidades 3D
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

// PASO 5: Crear el material — cómo se ve la superficie del objeto
// MeshNormalMaterial pinta cada cara con un color según su orientación,
// no necesita luces para verse (ideal para empezar)
const material = new THREE.MeshNormalMaterial();

// PASO 6: Combinar geometría + material en un Mesh (malla)
// Esto es lo que finalmente es un objeto 3D visible y real
const cubo = new THREE.Mesh(geometry, material);

// Agregamos el cubo a la escena — si no hacemos esto, existe pero no se muestra
scene.add(cubo);

// PASO 7: Función de animación — se ejecutará una y otra vez, como los fotogramas de un video
function animate() {

  // Le pedimos al navegador que vuelva a llamar a "animate" en el próximo fotograma
  // (esto crea un bucle infinito sincronizado con la pantalla, ~60 veces por segundo)
  requestAnimationFrame(animate);

  // Aumentamos ligeramente la rotación del cubo en el eje X en cada fotograma
  cubo.rotation.x += 0.01;

  // Aumentamos ligeramente la rotación del cubo en el eje Y en cada fotograma
  cubo.rotation.y += 0.01;

  // Volvemos a dibujar la escena desde el punto de vista de la cámara,
  // ahora con la nueva rotación aplicada — esto es lo que crea el efecto de movimiento
  renderer.render(scene, camera);
}

// Llamamos a la función por primera vez para iniciar el bucle de animación
animate();
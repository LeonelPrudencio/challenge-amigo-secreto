

// Contenedor de nombres de amigos
let listaAmigosGlobal = [];

// Lista de imágenes de aliens disponibles
const aliens = [
    "assets/alien-1-svgrepo-com2.svg", "assets/alien-2-svgrepo-com2.svg",
    "assets/alien-3-svgrepo-com2.svg", "assets/alien-4-svgrepo-com2.svg"
];

// Función para mostrar la cantidad de amigos que se tienen y el límite (24)
function refrescarRespuesta() {
    // Texto que indica número de amigos de momento
    const resultadoSorteo = document.getElementById('resultado');// identificador
    resultadoSorteo.textContent = "Amigos: " + listaAmigosGlobal.length + "/24";// texto a mostrar
    resultadoSorteo.classList.add('resultado__texto');// estilo de texto

    // Mostrar el contenedor del resultado si estaba oculto
    document.getElementById('resultado').style.display = 'block';
}

//Primer refresco
refrescarRespuesta();

// Funcion que genera las coordenadas y ángulos para las imágenes alrededor
// de una circunferencia
// n: número de imágenes a distribuir
// r: radio de la circunferencia
function distribuirImagenesEnCircunferencia(n, r) {
    let posiciones = []; // Para guardar las coordenadas y ángulos

    for (let i = 0; i < n; i++) {
        let theta = (2 * Math.PI / n) * i;  // Calcula el ángulo en radianes
        let x = r * Math.cos(theta);        // Coordenada X
        let y = r * Math.sin(theta);        // Coordenada Y
        let anguloGrados = theta * (180 / Math.PI); // Convierte a grados

        // Redondea a un decimal
        x = parseFloat(x.toFixed(1));
        y = parseFloat(y.toFixed(1));
        anguloGrados = parseFloat(anguloGrados.toFixed(1));

        // Se guarda cada posición con su ángulo
        posiciones.push({ x: x, y: y, angulo: anguloGrados });
    }

    return posiciones;
}

// Dos lineas de coordenadas y ángulos
let posis1 = distribuirImagenesEnCircunferencia(16, 178);
let posis2 = distribuirImagenesEnCircunferencia(8, 100);

// Lista de posiciones posibles
const posiciones = posis1.concat(posis2);

// Lista de posiciones ya usadas
let posicionesUsadas = [];

// Banderita para indicar si ya no se pueden agregar más amigos
let banderita = false;

// Poniendo el prompt donde se debe
const inputAmigo = document.getElementById('amigo');
inputAmigo.focus();

// Función para recoger el input, verificarlo y agregarlo si se puede
function agregarAmigo() {
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
    // 1.- Input
    // Para que el usuario ingrese el nombre
    const inputAmigo = document.getElementById('amigo');// identificador en el html
    const nombreAmigo = inputAmigo.value.trim();// quitando espacios adelante y al final
    
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
    // 2.- Verificaciones del nombre ingresado
    // Verificar que se pueden seguir agregando amigos
    if (banderita) {
        alert('No se pueden añadir más amigos');
        return;
    }

    // Verificar que no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre');
        return;
    }
    
    // Verificar que no contenga números
    if (/\d/.test(nombreAmigo)) {
        alert('Por favor, ingresa solo nombres (sin números)');
        return;
    }

    // Verificar que no contenga carateres especiales
    if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombreAmigo)) {
        alert('Por favor, ingresa solo nombres (sin caracteres especiales)');
        return;
    }

    // Verificar que no esté ya en la lista
    if (listaAmigosGlobal.includes(nombreAmigo)) {
        alert('Por favor, ingresa solo nombres sin repetición');
        return;
    }
    
    // Agregar el nombre a la lista global
    listaAmigosGlobal.push(nombreAmigo);
    
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
    // 3.- Mostrando en pantalla
    // Crear un nuevo elemento de lista
    const listaAmigos = document.getElementById('listaAmigos');// identificador en el html
    const nuevoAmigo = document.createElement('li');// elemento de tipo lista para contener los nombres
    nuevoAmigo.textContent = nombreAmigo;// igualando valor del imput con el de la lista
    
    // Agregar el nuevo elemento a la lista
    listaAmigos.appendChild(nuevoAmigo);

    // Agregar una imagen aleatoria en el planeta
    agregarImagenAleatoria();

    // Refrescar
    refrescarRespuesta();
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Enfocar nuevamente el input para seguir agregando
    inputAmigo.focus();

    // Actualizar la banderita
    if (listaAmigosGlobal.length == 24) {
        banderita = true;
    }
}

// Agregar evento para permitir agregar amigos presionando Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});


// Función para agregar una imagen aleatoria respectiva
function agregarImagenAleatoria() {
    // Seleccionar una imagen aleatoria
    let imagenAleatoria = aliens[Math.floor(Math.random() * aliens.length)];

    // Seleccionar una posición aleatoria que aún no haya sido usada
    let posicionDisponible = posiciones.filter(pos => 
        !posicionesUsadas.includes(pos)
    );
    
    if (posicionDisponible.length === 0) return;

    let posicionElegida = posicionDisponible[Math.floor(Math.random() * posicionDisponible.length)];
    
    // Guardar la posición usada para no repetir
    posicionesUsadas.push(posicionElegida);

    // Crear un nuevo elemento <img>
    let img = document.createElement("img");
    img.src = imagenAleatoria;
    img.className = "friend__icon rotated";
    img.style.position = "absolute";
    img.style.left = `${posicionElegida.x + 197}px`;  // Centrar
    img.style.top = `${posicionElegida.y + 223}px`;
    img.style.width = '68px'; // Tamaño pequeño
    img.style.height = 'auto';
    img.style.transform = `rotate(${posicionElegida.angulo + 90}deg)`;

    // Agregar la imagen al área de imágenes
    document.getElementById("area-imagenes").appendChild(img);
}


// Función para sortear un amigo
function sortearAmigo() {
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
    // 1.- Lista
    // Verificar que haya al menos un amigo en la lista
    if (listaAmigosGlobal.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }
    
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
    // 2.- Persona aletaoria
    // Generar un índice aleatorio usando la lista global
    const indiceAleatorio = Math.floor(Math.random() * listaAmigosGlobal.length);
    
    // Obtener el amigo sorteado de la lista global
    const amigoSorteado = listaAmigosGlobal[indiceAleatorio];
    
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
    // 3.- Mostrando en pantalla
    // Mostrar el resultado del sorteo
    const resultadoSorteo = document.getElementById('resultado');// identificador
    resultadoSorteo.textContent = "Tu amigo secreto es: " + amigoSorteado;// texto a mostrar
    resultadoSorteo.classList.add('resultado__texto');// estilo de texto
    
    // Mostrar el contenedor del resultado si estaba oculto
    document.getElementById('resultado').style.display = 'block';
}


// Función para reiniciar todo
function reiniciar() {
    // 1. Limpiar la lista global de amigos y refrescar respuesta
    listaAmigosGlobal = [];
    refrescarRespuesta();

    // 2. Limpiar la lista de posiciones usadas
    posicionesUsadas = [];

    // 3. Limpiar la lista de amigos mostrada en el DOM
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Elimina todos los elementos hijos

    // 4. Limpiar las imágenes agregadas en el área de imágenes
    const areaImagenes = document.getElementById('area-imagenes');
    const imagenes = areaImagenes.querySelectorAll('img'); // Obtener todas las imágenes

    // Recorrer las imágenes y eliminar solo las que no sean la primera (el planeta)
    imagenes.forEach((imagen, index) => {
        if (index !== 0) { // Conservar la primera imagen (índice 0)
            imagen.remove(); // Eliminar las demás imágenes
        }
    });

    // 5. Restablecer la banderita
    banderita = false;

    // 6. Limpiar el input de nombre
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.value = '';

    // 7. Enfocar el input para seguir agregando
    inputAmigo.focus();
}

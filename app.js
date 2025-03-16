let listaAmigosGlobal = [];

function agregarAmigo() {
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
    // 1.- Input
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
    // Para que el usuario ingrese el nombre
    const inputAmigo = document.getElementById('amigo');// identificador en el html
    const nombreAmigo = inputAmigo.value.trim();// quitando espacios adelante y al final
    
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
    // 2.- Verificaciones del nombre ingresado
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
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
    /////   /////   /////   /////   /////   /////   /////   /////   /////   /////
    // Crear un nuevo elemento de lista
    const listaAmigos = document.getElementById('listaAmigos');// identificador en el html
    const nuevoAmigo = document.createElement('li');// elemento de tipo lista para contener los nombres
    nuevoAmigo.textContent = nombreAmigo;// igualando valor del imput con el de la lista
    nuevoAmigo.className = 'friend-item';// agragando estilo
    
    // Agregar el nuevo elemento a la lista
    listaAmigos.appendChild(nuevoAmigo);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Enfocar nuevamente el input para seguir agregando
    inputAmigo.focus();
    
    // Para propósitos de depuración, mostrar la lista actual en la consola
    console.log("Lista de amigos actual:", listaAmigosGlobal);
}
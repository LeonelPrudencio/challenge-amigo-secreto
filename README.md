# 🎮 Juego de Amigo Secreto

URL:
[https://challenge-amigo-secreto-git-main-leonelprudencios-projects.vercel.app/](https://challenge-amigo-secreto-git-main-leonelprudencios-projects.vercel.app/)

Este proyecto es un juego interactivo de **Amigo Secreto** donde los usuarios pueden ingresar nombres de amigos, sortear un amigo secreto y visualizar imágenes de "marcianos" alrededor de un planeta por cada amigo agregado.

![image](https://github.com/user-attachments/assets/2716fdab-8fa4-4b79-b707-a50806c98747)

---

## 🌟 Características Principales

### 🖥️ Interfaz de Usuario
- **Título**: "AMIGO SECRETO"
- **Subtítulo**: "Digite el nombre de sus amigos"
- **Input**: Campo de texto para ingresar nombres
- **Botones**:
  - **AÑADIR**: Agrega un amigo a la lista
  - **SORTEAR**: Selecciona un amigo secreto al azar
  - **REINICIAR**: Limpia la lista de amigos y las imágenes generadas
- **Área de Imágenes**: Muestra un planeta central y las imágenes de los "marcianos" alrededor

![image](https://github.com/user-attachments/assets/a054f464-b12c-48f6-aa43-9ee0ec5a303c)

---

### ⚙️ Funcionalidades
1. **Agregar Amigos**:
   - Permite al usuario ingresar nombres de amigos
   - Verifica que el nombre no esté vacío, no contenga números, no tenga caracteres especiales y no esté repetido
   - Limita la cantidad de amigos a 24
   - Por cada amigo agregado, se genera una imagen de un "marciano" en una posición aleatoria alrededor del planeta

2. **Sortear Amigo Secreto**:
   - Selecciona un nombre al azar de la lista de amigos
   - Muestra el resultado en pantalla

3. **Reiniciar**:
   - Limpia la lista de amigos, las imágenes generadas y restablece el estado inicial del juego

---

### 🔍 Verificaciones
- **Nombre Vacío**: Muestra una alerta si el campo de texto está vacío
- **Números en el Nombre**: Muestra una alerta si el nombre contiene números
- **Caracteres Especiales**: Muestra una alerta si el nombre contiene caracteres especiales no permitidos
- **Nombre Repetido**: Muestra una alerta si el nombre ya está en la lista
- **Límite de Amigos**: Muestra una alerta si se intenta agregar más de 24 amigos

---

### ✨ Efectos Visuales
- **Imágenes de Marcianos**:
  - Cada amigo agregado genera una imagen de un "marciano" (alien) en una posición aleatoria alrededor del planeta
  - Las imágenes se distribuyen en dos circunferencias concéntricas con diferentes radios
  - Las imágenes tienen un efecto de rotación y un tamaño pequeño (68px)
- **Planeta Central**: Imagen fija de un planeta en el centro del área de imágenes
- **Efecto de Sombra y Rotación**: Las imágenes de los marcianos tienen un efecto de rotación y sombra para darles un aspecto dinámico

---

### 🚀 Cómo Funciona el Juego
1. **Agregar Amigos**:
   - El usuario ingresa nombres en el campo de texto y hace clic en "AÑADIR"
   - Por cada nombre válido, se agrega a la lista y se genera una imagen de marciano alrededor del planeta
2. **Sortear Amigo Secreto**:
   - El usuario hace clic en "SORTEAR" para seleccionar un amigo al azar
   - El nombre del amigo sorteado se muestra en pantalla
3. **Reiniciar**:
   - El usuario hace clic en "REINICIAR" para limpiar la lista de amigos y las imágenes generadas

---

## 💻 Tecnologías Utilizadas
- **HTML**: Estructura de la página web
- **CSS**: Estilos y diseño visual
- **JavaScript**: Lógica del juego, manejo de eventos y generación dinámica de contenido

---

## 📋 Requisitos del Proyecto
- **Navegador Web**: Compatible con HTML5, CSS3 y JavaScript moderno
- **Imágenes**: Las imágenes de marcianos y el planeta deben estar en la carpeta `assets`

---

## 📝 Instrucciones de Uso
1. Abre el archivo `index.html` en un navegador web
2. Ingresa nombres de amigos en el campo de texto y haz clic en "AÑADIR"
3. Haz clic en "SORTEAR" para seleccionar un amigo secreto al azar
4. Usa "REINICIAR" para limpiar la lista y comenzar de nuevo

---

## 👨‍💻 Autor
Leonel Antonio Prudencio

## 🔖 Versión
1.0.0 (2025-03-21)

---

*Nota: Fué divertido XD*

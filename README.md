# Temporizador Pomodoro con Sugerencias de Actividades

Este proyecto es un **Temporizador Pomodoro** con un toque de **IA** simple, que sugiere actividades para hacer durante las pausas. Está hecho con **HTML**, **CSS** y **JavaScript**.

## Estructura del Proyecto

El proyecto está compuesto por tres archivos principales:
- `index.html`: La estructura HTML de la página.
- `styles.css`: Los estilos CSS que dan formato a la página.
- `script.js`: La lógica JavaScript que controla el temporizador y las sugerencias de actividades.

## Descripción del Código

### 1. **index.html**

Este archivo contiene la estructura básica de la página, incluyendo el temporizador y los botones de control.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"> <!-- Define la codificación de caracteres en UTF-8 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Asegura que el diseño sea responsivo -->
    <title>Temporizador Pomodoro</title> <!-- Título de la página -->
    <link rel="stylesheet" href="styles.css"> <!-- Enlaza el archivo CSS para los estilos -->
</head>
<body>
    <div class="container"> <!-- Contenedor principal para el contenido -->
        <h1>Temporizador Pomodoro</h1> <!-- Título principal -->
        <p id="timer">25:00</p> <!-- Elemento donde se mostrará el temporizador -->
        <div class="controls"> <!-- Contenedor de los botones -->
            <button onclick="startTimer()">Iniciar</button> <!-- Botón para iniciar el temporizador -->
            <button onclick="pauseTimer()">Pausar</button> <!-- Botón para pausar el temporizador -->
            <button onclick="resetTimer()">Reiniciar</button> <!-- Botón para reiniciar el temporizador -->
        </div>
        <div id="activity-suggestion" style="display:none;"> <!-- Contenedor oculto para mostrar la sugerencia de actividad -->
            <h2>Actividad recomendada:</h2>
            <p id="suggested-activity"></p> <!-- Elemento donde se mostrará la actividad recomendada -->
        </div>
    </div>

    <script src="script.js"></script> <!-- Enlaza el archivo JavaScript que contiene la lógica -->
</body>
</html>

let timerInterval;
let running = false;
let timeLeft = 1500; // 25 minutos en segundos

// Lista de actividades recomendadas durante la pausa
const activities = [
    "Haz algunos estiramientos.",
    "Tómate un vaso de agua.",
    "Haz una caminata corta.",
    "Lee un artículo interesante.",
    "Escucha música relajante.",
    "Medita por unos minutos.",
    "Llama a un amigo o familiar."
];

// Función para actualizar el temporizador en pantalla
function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60); // Obtiene los minutos restantes
    let seconds = timeLeft % 60; // Obtiene los segundos restantes
    document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Muestra el tiempo en formato mm:ss
}

// Función para iniciar el temporizador
function startTimer() {
    if (!running) { // Si no está corriendo
        running = true;
        document.querySelector('button[onclick="startTimer()"]').disabled = true; // Deshabilita el botón de iniciar
        timerInterval = setInterval(() => { // Inicia el temporizador en intervalos de 1 segundo
            if (timeLeft > 0) {
                timeLeft--; // Decrementa el tiempo
                updateTimerDisplay(); // Actualiza la pantalla
            } else {
                clearInterval(timerInterval); // Detiene el temporizador cuando llega a cero
                running = false;
                document.querySelector('button[onclick="startTimer()"]').disabled = false; // Habilita nuevamente el botón de iniciar
                alert("¡Tiempo terminado!"); // Muestra un mensaje cuando el tiempo se acaba
                showActivitySuggestion(); // Muestra la actividad recomendada
            }
        }, 1000);
    }
}

// Función para pausar el temporizador
function pauseTimer() {
    clearInterval(timerInterval); // Detiene el temporizador
    running = false;
    document.querySelector('button[onclick="startTimer()"]').disabled = false; // Habilita el botón de iniciar
}

// Función para reiniciar el temporizador
function resetTimer() {
    clearInterval(timerInterval); // Detiene el temporizador
    running = false;
    timeLeft = 1500; // Restablece el tiempo a 25 minutos
    updateTimerDisplay(); // Actualiza la pantalla
    document.querySelector('button[onclick="startTimer()"]').disabled = false; // Habilita el botón de iniciar
}

// Función para mostrar una actividad recomendada durante el descanso
function showActivitySuggestion() {
    const randomIndex = Math.floor(Math.random() * activities.length); // Elige una actividad aleatoria
    const activity = activities[randomIndex];
    document.getElementById("suggested-activity").innerText = activity; // Muestra la actividad recomendada en pantalla
    document.getElementById("activity-suggestion").style.display = "block"; // Muestra el contenedor de la sugerencia
}

// Inicializa la visualización del temporizador
updateTimerDisplay();

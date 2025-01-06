// script.js - Código JavaScript para interatividade simples

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ingressos comprados com sucesso! Aproveite a festa!');
});

// Countdown para o aniversário
function countdownToBirthday() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthday = new Date(`${currentYear}-12-29T00:00:00`);
    
    // Se o aniversário já passou este ano, ajusta para o próximo ano
    if (now > birthday) {
        birthday.setFullYear(currentYear + 1);
    }

    const timeRemaining = birthday - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Atualiza o DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Atualiza o countdown a cada segundo
setInterval(countdownToBirthday, 1000);

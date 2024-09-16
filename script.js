document.addEventListener('DOMContentLoaded', () => {
    const lowPercentageSound = document.getElementById('low-percentage-sound');
    const highPercentageSound = document.getElementById('high-percentage-sound');

    document.getElementById('name-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name-input').value;
        const percentage = calculateJomokPercentage(name);

        document.getElementById('name-result').textContent = name;
        document.getElementById('percentage-result').textContent = `${percentage}%`;
        document.getElementById('result').classList.remove('hidden');

        // Tentukan suara berdasarkan persentase
        if (percentage <= 40) {
            lowPercentageSound.play();
        } else {
            highPercentageSound.play();
        }
    });

    document.getElementById('guide-btn').addEventListener('click', () => {
        const guide = document.getElementById('guide');
        guide.classList.toggle('hidden');
    });

    function calculateJomokPercentage(name) {
        // Perhitungan sederhana untuk demo
        const basePercentage = 50; // Base percentage
        const nameLength = name.length;
        const percentage = Math.min(basePercentage + nameLength * 2, 100); // Contoh perhitungan
        return percentage;
    }
});

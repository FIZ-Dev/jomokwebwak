document.addEventListener('DOMContentLoaded', () => {
    const notificationSound = document.getElementById('notification-sound');

    document.getElementById('name-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name-input').value;
        const percentage = calculateJomokPercentage(name);

        document.getElementById('name-result').textContent = name;
        document.getElementById('percentage-result').textContent = `${percentage}%`;
        document.getElementById('result').classList.remove('hidden');

        // Play the notification sound
        notificationSound.play();
    });

    document.getElementById('guide-btn').addEventListener('click', () => {
        const guide = document.getElementById('guide');
        guide.classList.toggle('hidden');
    });

    function calculateJomokPercentage(name) {
        // Basic calculation for demo purposes
        // Replace with your actual logic
        const basePercentage = 50; // Base percentage
        const nameLength = name.length;
        const percentage = Math.min(basePercentage + nameLength * 2, 100); // Example calculation
        return percentage;
    }
});

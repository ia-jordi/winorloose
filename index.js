document.addEventListener('DOMContentLoaded', () => {
    const btnRed = document.getElementById('btnRed');
    const btnBlue = document.getElementById('btnBlue');
    const resultDiv = document.getElementById('result');

    const outcomes = [
        { text: '¡HAS GANADO!', class: 'win' },
        { text: 'HAS PERDIDO', class: 'lose' }
    ];

    function playGame() {
        // Reset result area
        resultDiv.classList.remove('show', 'win', 'lose');
        
        // Random outcome
        const randomIndex = Math.floor(Math.random() * outcomes.length);
        const outcome = outcomes[randomIndex];

        // Slight delay to simulate "thinking" and allow for reset animation
        setTimeout(() => {
            resultDiv.textContent = outcome.text;
            resultDiv.className = outcome.class + ' show';
        }, 150);
    }

    btnRed.addEventListener('click', () => {
        playGame();
    });

    btnBlue.addEventListener('click', () => {
        playGame();
    });
});

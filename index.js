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

    // --- Trivia Logic ---
    const triviaQuestions = [
        { question: "Lionel Messi ha ganado 8 Balones de Oro.", answer: true },
        { question: "El Mundial de 2014 se jugó en Brasil.", answer: true },
        { question: "El Real Madrid tiene 10 Champions League.", answer: false },
        { question: "Cristiano Ronaldo es portugués.", answer: true },
        { question: "La selección de Alemania ganó el Mundial 2010.", answer: false },
        { question: "Neymar Jr. nunca ha jugado en el Barcelona.", answer: false },
        { question: "El estadio del Barcelona se llama Santiago Bernabéu.", answer: false },
        { question: "Pelé ganó 3 Copas del Mundo.", answer: true },
        { question: "El VAR se introdujo en el Mundial de 2018.", answer: true },
        { question: "Zidane dio un cabezazo en la final del Mundial 2006.", answer: true }
    ];

    const triviaQuestionEl = document.getElementById('trivia-question');
    const btnTrue = document.getElementById('btnTrue');
    const btnFalse = document.getElementById('btnFalse');
    const triviaScoreEl = document.getElementById('trivia-score');
    const triviaFeedbackEl = document.getElementById('trivia-feedback');

    let currentQuestion = null;
    let score = 0;

    function loadTriviaQuestion() {
        const randomIndex = Math.floor(Math.random() * triviaQuestions.length);
        currentQuestion = triviaQuestions[randomIndex];
        triviaQuestionEl.textContent = currentQuestion.question;
        triviaFeedbackEl.textContent = '';
        triviaFeedbackEl.className = '';
    }

    function checkAnswer(userAnswer) {
        if (!currentQuestion) return;

        if (userAnswer === currentQuestion.answer) {
            score++;
            triviaScoreEl.textContent = score;
            triviaFeedbackEl.textContent = '¡Correcto!';
            triviaFeedbackEl.className = 'feedback-correct';
        } else {
            triviaFeedbackEl.textContent = 'Incorrecto.';
            triviaFeedbackEl.className = 'feedback-incorrect';
        }

        // Load next question after a short delay
        setTimeout(() => {
            loadTriviaQuestion();
        }, 1500);
    }

    btnTrue.addEventListener('click', () => checkAnswer(true));
    btnFalse.addEventListener('click', () => checkAnswer(false));

    // Initialize Trivia
    loadTriviaQuestion();
});

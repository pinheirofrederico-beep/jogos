let currentLevel = 1;
let currentQuestionIndex = 1;
const questionsPerLevel = 40;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const levelDisplay = document.getElementById('level-display');
const progressDisplay = document.getElementById('progress-display');
const barFill = document.getElementById('bar-fill');

// Função que gera perguntas matematicamente para simular 10.000 níveis
function loadQuestion() {
    const num1 = Math.floor(Math.random() * (currentLevel + 10));
    const num2 = Math.floor(Math.random() * 10);
    const correctAnswer = num1 + num2;

    questionText.innerText = `Nível ${currentLevel} - Questão ${currentQuestionIndex}: Quanto é ${num1} + ${num2}?`;
    
    optionsContainer.innerHTML = '';
    
    // Gerar 4 opções
    const answers = [correctAnswer, correctAnswer + 2, correctAnswer - 1, correctAnswer + 5];
    answers.sort(() => Math.random() - 0.5);

    answers.forEach(alt => {
        const btn = document.createElement('button');
        btn.innerText = alt;
        btn.onclick = () => checkAnswer(alt, correctAnswer);
        optionsContainer.appendChild(btn);
    });

    updateUI();
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        currentQuestionIndex++;
        if (currentQuestionIndex > questionsPerLevel) {
            currentLevel++;
            currentQuestionIndex = 1;
            alert("Parabéns! Você avançou para o nível " + currentLevel);
        }
        loadQuestion();
    } else {
        alert("Ops! Resposta errada. Tente novamente.");
    }
}

function updateUI() {
    levelDisplay.innerText = currentLevel;
    progressDisplay.innerText = `${currentQuestionIndex}/${questionsPerLevel}`;
    const progressPercent = (currentQuestionIndex / questionsPerLevel) * 100;
    barFill.style.width = `${progressPercent}%`;
}

// Iniciar o jogo
loadQuestion();

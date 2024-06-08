const quizData = [
    {
        question: "What was the most crucial event in the 19th century for the Philippines?",
        choices: ["Philippine-American War", "Philippine Revolution", "World War II", "Spanish-American War"],
        correct: "Philippine Revolution"
    },
    {
        question: "Who controlled the educational system during the 19th century in the Philippines?",
        choices: ["Government", "Nobles", "Friars", "Teachers"],
        correct: "Friars"
    },
    {
        question: "What was the primary role of the Gobernadorcillo?",
        choices: ["Military leader", "Municipal mayor", "Tax collector", "Religious leader"],
        correct: "Municipal mayor"
    },
    {
        question: "Who were at the top of the social structure in the 19th century Philippines?",
        choices: ["Indios", "Mestizos", "Spanish Officials", "Principalia"],
        correct: "Spanish Officials"
    },
    {
        question: "What were the Indios known for in the 19th century?",
        choices: ["Being rich", "Being poor natives", "Being teachers", "Being traders"],
        correct: "Being poor natives"
    },
    {
        question: "Who was the Vice-Real Patron in charge of?",
        choices: ["Military", "Tax collection", "Ecclesiastical positions", "Trade"],
        correct: "Ecclesiastical positions"
    },
    {
        question: "Which class was mixed of Spanish and Indigenous blood?",
        choices: ["Highest Class", "Middle Class", "Lowest Class", "None"],
        correct: "Middle Class"
    },
    {
        question: "What was a significant issue in the educational system?",
        choices: ["High quality materials", "Academic freedom", "Obsolete teaching methods", "Equal opportunities"],
        correct: "Obsolete teaching methods"
    },
    {
        question: "Where did the Gobernador y Capitan-General serve?",
        choices: ["Spain", "Intramuros", "Mexico", "Japan"],
        correct: "Intramuros"
    },
    {
        question: "Who were responsible for collecting taxes?",
        choices: ["Friars", "Gobernadorcillo", "Cabeza de Barangay", "Indios"],
        correct: "Cabeza de Barangay"
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuiz() {
    shuffle(quizData);
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';
    quizData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h2>${index + 1}. ${item.question}</h2>
            <div class="answers">
                ${item.choices.map(choice => `
                    <label>
                        <input type="radio" name="question${index}" value="${choice}">
                        ${choice}
                    </label>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = '';
    let score = 0;
    quizData.forEach((item, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        const result = document.createElement('div');
        if (selectedAnswer) {
            if (selectedAnswer.value === item.correct) {
                score++;
                result.className = 'correct';
                result.innerHTML = `Question ${index + 1}: Correct! The answer is "${item.correct}".`;
            } else {
                result.className = 'wrong';
                result.innerHTML = `Question ${index + 1}: Wrong! The correct answer is "${item.correct}".`;
            }
        } else {
            result.className = 'wrong';
            result.innerHTML = `Question ${index + 1}: No answer selected. The correct answer is "${item.correct}".`;
        }
        resultsDiv.appendChild(result);
    });
    const scoreDiv = document.createElement('div');
    scoreDiv.innerHTML = `Your score: ${score}/${quizData.length}`;
    resultsDiv.appendChild(scoreDiv);
}

document.addEventListener('DOMContentLoaded', loadQuiz);

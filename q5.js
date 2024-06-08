const quizData = [
    {
        question: "When did Rizal enter Ateneo de Manila?",
        choices: ["a) 1867", "b) 1872", "c) 1877", "d) 1882"],
        correct: "b) 1872"
    },
    {
        question: "Who was the college registrar that initially refused to admit Rizal into Ateneo?",
        choices: ["a) Father Magin Ferrando", "b) Manuel Xerez Burgos", "c) Dr. Louis de Wecker", "d) Father Burgos"],
        correct: "a) Father Magin Ferrando"
    },
    {
        question: "What was the original name of Ateneo Municipal?",
        choices: ["a) Escuela Pia", "b) Universidad Central", "c) Santa Isabel College", "d) La Liga Filipina"],
        correct: "a) Escuela Pia"
    },
    {
        question: "Why did Rizal adopt the surname 'Rizal' instead of 'Mercado' when he registered at Ateneo?",
        choices: ["a) 'Rizal' was easier to pronounce", "b) 'Mercado' had come under suspicion of Spanish authorities", "c) 'Rizal' was his mother's maiden name", "d) He wanted a more unique name"],
        correct: "b) 'Mercado' had come under suspicion of Spanish authorities"
    },
    {
        question: "Where did Rizal go in 1882 to study medicine?",
        choices: ["a) Berlin", "b) Madrid", "c) Paris", "d) Heidelberg"],
        correct: "b) Madrid"
    },
    {
        question: "In which city did Rizal publish his novel *Noli Me Tangere*?",
        choices: ["a) Ghent", "b) Madrid", "c) Berlin", "d) Manila"],
        correct: "c) Berlin"
    },
    {
        question: "Which renowned ophthalmologist did Rizal study under in Paris?",
        choices: ["a) Dr. Louis de Wecker", "b) Dr. Feodor Jagor", "c) Dr. Blumentritt", "d) Dr. Maximo Viola"],
        correct: "a) Dr. Louis de Wecker"
    },
    {
        question: "What was the name of the reformist society Rizal founded upon returning to the Philippines in 1892?",
        choices: ["a) La Liga Filipina", "b) Katipunan", "c) Propaganda Movement", "d) Reformista Filipino"],
        correct: "a) La Liga Filipina"
    },
    {
        question: "During his exile in Dapitan, who became Rizal's partner?",
        choices: ["a) Leonor Rivera", "b) Nelly Boustead", "c) Josephine Bracken", "d) Gertrude Beckett"],
        correct: "c) Josephine Bracken"
    },
    {
        question: "When and where was Rizal executed?",
        choices: ["a) December 30, 1896, at Bagumbayan", "b) January 1, 1896, in Intramuros", "c) December 30, 1898, at Luneta Park", "d) February 28, 1897, in Dapitan"],
        correct: "a) December 30, 1896, at Bagumbayan"
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

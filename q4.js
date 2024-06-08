const quizData = [
    {
        type: "identification",
        question: "Who accompanied Rizal to Manila on June 10, 1872?",
        choices: ["A) Paciano", "B) Father Magin Ferrando", "C) Manuel Xerez Burgos", "D) Father Burgos"],
        correct: "A) Paciano"
    },
    {
        type: "multiple choice",
        question: "Where did Rizal study medicine and pursue studies in philosophy and letters?",
        choices: ["A) France", "B) Germany", "C) Spain", "D) Switzerland"],
        correct: "C) Spain"
    },
    {
        type: "enumeration",
        question: "List the countries Rizal visited during his time abroad:",
        choices: ["Spain", "France", "Germany", "Italy", "Switzerland", "Austria"],
        correct: "Spain, France, Germany, Italy, Switzerland, Austria"
    },
    {
        type: "identification",
        question: "Who founded the La Liga Filipina?",
        choices: ["A) Mariano Gomez", "B) Jose Burgos", "C) Jacinto Zamora", "D) Jose Rizal"],
        correct: "D) Jose Rizal"
    },
    {
        type: "multiple choice",
        question: "What was the publication date range for La Solidaridad newspaper?",
        choices: ["A) February 15, 1889 to October 31, 1889", "B) December 31, 1888 to November 15, 1895", "C) February 15, 1889 to November 15, 1895", "D) November 15, 1889 to November 15, 1895"],
        correct: "B) December 31, 1888 to November 15, 1895"
    },
    {
        type: "enumeration",
        question: "Name the contributors of La Solidaridad:",
        choices: ["Marcelo H. del Pilar (Plaridel)", "Antonio Ma. Regidor", "Dr. Jose Rizal (Laong Laan)", "Isabelo delos Reyes", "Mariano Ponce (Tigbalang)", "Eduardo de Lete", "Antonio Luna (Taga-ilog)", "Jose Ma. Panganiban (Jomapa)", "Dr. Pedro Paterno", "Jose Alejandrino", "Professor Blumentrit", "Dr. Morayta"],
        correct: "Marcelo H. del Pilar (Plaridel), Antonio Ma. Regidor, Dr. Jose Rizal (Laong Laan), Isabelo delos Reyes, Mariano Ponce (Tigbalang), Eduardo de Lete, Antonio Luna (Taga-ilog), Jose Ma. Panganiban (Jomapa), Dr. Pedro Paterno, Jose Alejandrino, Professor Blumentrit, Dr. Morayta"
    },
    {
        type: "identification",
        question: "Who was the President of La Solidaridad organization?",
        choices: ["A) Galiciano Apacible", "B) Graciano Lopez Jaena", "C) Marcelo H. del Pilar", "D) M.H. del Pilar"],
        correct: "C) Marcelo H. del Pilar"
    },
    {
        type: "multiple choice",
        question: "What was the aim of La Solidaridad?",
        choices: ["A) To portray vividly the deplorable condition of the Philippines", "B) To advocate liberal ideas and progress", "C) To work peacefully for political and social reforms", "D) All of the above"],
        correct: "D) All of the above"
    },
    {
        type: "enumeration",
        question: "List the factors that gave birth to Philippine Nationalism:",
        choices: ["The influx of liberal ideas (from abroad)", "The Spanish revolution 1868 or the opening of Suez canal 1869", "The Martyrdom of fathers Gomez, Burgos, Zamora"],
        correct: "The influx of liberal ideas (from abroad), The Spanish revolution 1868 or the opening of Suez canal 1869, The Martyrdom of fathers Gomez, Burgos, Zamora"
    },
    {
        type: "identification",
        question: "Who was the nephew of Father Burgos and interceded for Rizal's admission to Ateneo?",
        choices: ["A) Manuel Xerez Burgos", "B) Paciano", "C) Father Magin Ferrando", "D) Father Burgos"],
        correct: "A) Manuel Xerez Burgos"
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
        if (item.type === "identification" || item.type === "multiple choice") {
            questionDiv.innerHTML = `
                <h2>${index + 1}. ${item.question}</h2>
                <div class="answers">
                    ${item.choices.map(choice => `
                        <label>
                            <input type="${item.type === "identification" ? "radio" : "checkbox"}" name="question${index}" value="${choice}">
                            ${choice}
                        </label>
                    `).join('')}
                </div>
            `;
        } else if (item.type === "enumeration") {
            questionDiv.innerHTML = `
                <h2>${index + 1}. ${item.question}</h2>
                <div class="answers">
                    ${item.choices.map(choice => `
                        <label>
                            <input type="checkbox" name="question${index}" value="${choice}">
                            ${choice}
                        </label>
                    `).join('')}
                </div>
            `;
        }
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


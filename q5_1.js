const quizData = [
                                        {
                                            question: "When did the Propaganda Movement begin?",
                                            choices: ["a) 1872", "b) 1888", "c) 1869", "d) 1895"],
                                            correct: "a) 1872"
                                        },
                                        {
                                            question: "Who were executed at Luneta in 1872, marking the beginning of the Propaganda Movement?",
                                            choices: ["a) Fathers Mariano Gomez, Jose Burgos, and Jacinto Zamora", "b) Fathers Jose Burgos, Mariano Gomez, and Pedro Paterno", "c) Fathers Mariano Gomez, Jose Burgos, and Antonio Luna", "d) Fathers Jose Burgos, Marcelo del Pilar, and Jacinto Zamora"],
                                            correct: "a) Fathers Mariano Gomez, Jose Burgos, and Jacinto Zamora"
                                        },
                                        {
                                            question: "What was the event where about 200 Filipino soldiers and dock workers mutinied on January 20, 1872?",
                                            choices: ["a) Manila Revolt", "b) Cavite Mutiny", "c) Anti-Friar Demonstration", "d) Bagumbayan Revolt"],
                                            correct: "b) Cavite Mutiny"
                                        },
                                        {
                                            question: "Who led the Cavite Mutiny in 1872?",
                                            choices: ["a) Doroteo Cortes", "b) Jose Rizal", "c) Sergeant La Madrid", "d) Marcelo H. del Pilar"],
                                            correct: "c) Sergeant La Madrid"
                                        },
                                        {
                                            question: "What was the outcome of the unfair trial of Fathers Burgos, Gomez, and Zamora after the Cavite Mutiny?",
                                            choices: ["a) Exile to Marianas", "b) Imprisonment for life", "c) Death by garrote", "d) Public flogging"],
                                            correct: "c) Death by garrote"
                                        },
                                        {
                                            question: "Who led the Anti-Friar Manifesto of 1888?",
                                            choices: ["a) Jose A. Ramos", "b) Doroteo Cortes", "c) Graciano Lopez Jaena", "d) Antonio Luna"],
                                            correct: "b) Doroteo Cortes"
                                        },
                                        {
                                            question: "When was the La Solidaridad organization established?",
                                            choices: ["a) February 15, 1889", "b) March 1, 1888", "c) December 31, 1888", "d) November 15, 1889"],
                                            correct: "c) December 31, 1888"
                                        },
                                        {
                                            question: "Who was the Vice-President of the La Solidaridad organization?",
                                            choices: ["a) Galiciano Apacible", "b) Marcelo H. del Pilar", "c) Jose Alejandrino", "d) Graciano Lopez Jaena"],
                                            correct: "d) Graciano Lopez Jaena"
                                        },
                                        {
                                            question: "What was the main aim of the La Solidaridad newspaper?",
                                            choices: ["a) To advocate for Filipino independence", "b) To combat medievalism and reaction", "c) To support Spanish colonial rule", "d) To portray the progress of the Philippines"],
                                            correct: "b) To combat medievalism and reaction"
                                        },
                                        {
                                            question: "Who among the following was NOT a contributor to La Solidaridad?",
                                            choices: ["a) Dr. Jose Rizal (Laong Laan)", "b) Antonio Luna (Taga-ilog)", "c) Jose Alejandrino", "d) Andres Bonifacio"],
                                            correct: "d) Andres Bonifacio"
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
                                    
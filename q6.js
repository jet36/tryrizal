const quizData = [
                                        {
                                            question: "When was Republic Act No. 1425 approved and signed?",
                                            choices: ["a) June 12, 1954", "b) June 12, 1955", "c) June 12, 1956", "d) June 12, 1957"],
                                            correct: "c) June 12, 1956"
                                        },
                                        {
                                            question: "Who was the President of the Philippines when Republic Act No. 1425 was signed?",
                                            choices: ["a) Manuel Roxas", "b) Elpidio Quirino", "c) Ramon Magsaysay", "d) Carlos P. Garcia"],
                                            correct: "c) Ramon Magsaysay"
                                        },
                                        {
                                            question: "What is the primary focus of Republic Act No. 1425?",
                                            choices: ["a) The life and works of Andres Bonifacio", "b) The life and works of Emilio Aguinaldo", "c) The life, works, and writings of Jose Rizal", "d) The history of the Philippine Revolution"],
                                            correct: "c) The life, works, and writings of Jose Rizal"
                                        },
                                        {
                                            question: "Which two novels by Jose Rizal are particularly emphasized in Republic Act No. 1425?",
                                            choices: ["a) Noli Me Tangere and El Filibusterismo", "b) Noli Me Tangere and La Solidaridad", "c) El Filibusterismo and La Solidaridad", "d) La Solidaridad and Mi Ultimo Adios"],
                                            correct: "a) Noli Me Tangere and El Filibusterismo"
                                        },
                                        {
                                            question: "What is required of all public and private schools, colleges, and universities according to Republic Act No. 1425?",
                                            choices: ["a) To include courses on Philippine history", "b) To include courses on the life, works, and writings of Jose Rizal", "c) To include courses on Southeast Asian literature", "d) To include courses on Philippine geography"],
                                            correct: "b) To include courses on the life, works, and writings of Jose Rizal"
                                        },
                                        {
                                            question: "Which versions of Noli Me Tangere and El Filibusterismo are mandated for use in collegiate courses by Republic Act No. 1425?",
                                            choices: ["a) Simplified versions", "b) Children's editions", "c) Original or unexpurgated editions or their English translations", "d) Comic book versions"],
                                            correct: "c) Original or unexpurgated editions or their English translations"
                                        },
                                        {
                                            question: "How many senators opposed the passing of Republic Act No. 1425?",
                                            choices: ["a) One", "b) Two", "c) Three", "d) Four"],
                                            correct: "c) Three"
                                        },
                                        {
                                            question: "What does Section 2 of Republic Act No. 1425 require libraries in schools, colleges, and universities to have?",
                                            choices: ["a) Copies of Filipino folk tales", "b) Copies of Jose Rizal's original and unexpurgated works", "c) Copies of foreign literature", "d) Copies of contemporary Filipino literature"],
                                            correct: "b) Copies of Jose Rizal's original and unexpurgated works"
                                        },
                                        {
                                            question: "What is the sum authorized to be appropriated for the implementation of Republic Act No. 1425?",
                                            choices: ["a) One hundred thousand pesos", "b) Two hundred thousand pesos", "c) Three hundred thousand pesos", "d) Four hundred thousand pesos"],
                                            correct: "c) Three hundred thousand pesos"
                                        },
                                        {
                                            question: "Which government body is responsible for the translation and distribution of Jose Rizal's works according to Section 3 of Republic Act No. 1425?",
                                            choices: ["a) Department of Education", "b) National Library of the Philippines", "c) Board of National Education", "d) Commission on Higher Education"],
                                            correct: "c) Board of National Education"
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
                                    
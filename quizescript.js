// script.js
const questions = [
    {
        question: "What does HTML Stand for",
        answers: ["Hyper Text Markup Language","Homo Tool Markup Language","Hyperlinks and Text Markup Language"],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "Which technology is primarily responsible for styling of web pages?",
        answers: ["JavaScript", "HTML", "CSS", "Python"],
        correct: "CSS"
    },
    {
        question: "What does CSS stand for?",
        answers: ["Creative Style Sheet", "Cascading Style Sheet", "Computer Style Sheet"],
        correct: "Cascading Style Sheet"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: ["<style>","<css>","<script>","<link>"],
        correct: "<style>"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: ["text-color","color","font-color","background-color"],
        correct: "background-color"
    },
];
let currentQuestionIndex = 0;
let score = 0;
function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');

    questionContainer.innerText = questions[currentQuestionIndex].question;
    answersContainer.innerHTML = '';

    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => selectAnswer(button, answer);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(button, answer) {
    const correct = questions[currentQuestionIndex].correct;
    const nextButton = document.getElementById('next-btn');

    if (answer === correct) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }

    document.querySelectorAll('#answers-container button').forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correct) {
            btn.classList.add('correct');
        }
    });

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('next-btn').style.display = 'none';
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;
}

window.onload = () => {
    loadQuestion();
}

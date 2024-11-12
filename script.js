
// Memory Function to Show Pop-Up Messages
function showMemory(memoryText) {
    alert(`Memory: ${memoryText} - Here’s what happened!`);
}

// Quiz Questions and Answers
const quizQuestions = [
    { question: "When did we meet?", answer: "13 Nov 2020" },
    { question: "What's the most important memory of us that we'd never forget?", answer: "Our first hug" },
    { question: "What's the one thing we both fear of?", answer: "Letting go of the other" },
    { question: "What's the food that you still owe me?", answer: "Burger" },
    { question: "When did we 'sync' for the first time?", answer: "Sid Sriram song" }
];

function loadQuiz() {
    const quizContent = document.getElementById("quiz-content");
    quizQuestions.forEach((q, index) => {
        const questionEl = document.createElement("p");
        questionEl.textContent = `${index + 1}. ${q.question}`;
        quizContent.appendChild(questionEl);

        const answerInput = document.createElement("input");
        answerInput.type = "text";
        answerInput.placeholder = "Your answer";
        answerInput.id = `answer-${index}`;
        quizContent.appendChild(answerInput);
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Answers";
    submitButton.onclick = checkAnswers;
    quizContent.appendChild(submitButton);
}

function checkAnswers() {
    let correctAnswers = 0;
    quizQuestions.forEach((q, index) => {
        const userAnswer = document.getElementById(`answer-${index}`).value;
        if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
            correctAnswers++;
        }
    });
    alert(`You got ${correctAnswers} out of ${quizQuestions.length} correct!`);
}

// Start Quiz on Page Load
loadQuiz();

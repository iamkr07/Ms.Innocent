
// Memory Function to Show Pop-Up Messages
function showMemory(memoryText) {
    let message;
    if (memoryText === "Our First Meeting") {
        message = "Memory: Our First Meeting - After 6 months of texts and calls we finally got to meet each other.The drive that brought us together,the aderaline that we had in meeting each other's face and the urge to see the other's smile so badly";
    } else if (memoryText === "Our First Promise") {
        message = "Memory: Our First Promise - No matter what happenes,how good or bad it is,how harder it can get;The We got for each other would never ever change and remain the same as day one.Ms.Innocent and Mr.Innocent.Forever.";
    } else {
        message = `Memory: ${memoryText} - Here’s what happened!`;
    }
    alert(message);
}


// Quiz Questions and Answers
const quizQuestions = [
    { question: "When did we meet?", answer: "13 Nov 2021" },
    { question: "What's the most important memory of us that we'd never forget?", answer: "Our first hug" },
    { question: "What's the one thing we both fear of?", answer: "Letting go of the other" },
    { question: "What's the food that you still owe me?", answer: "Burger" },
    { question: "Our first favourite song?", answer: "Señorita" }
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

    if (correctAnswers >= 3) {
        alert(`You got ${correctAnswers} out of ${quizQuestions.length} correct! Here’s a special message for you:`);
        document.getElementById("message-content").style.display = "block"; // Show the message
    } else {
        alert(`You got ${correctAnswers} out of ${quizQuestions.length} correct. Try again to unlock the message!`);
    }
}


// Start Quiz on Page Load
loadQuiz();

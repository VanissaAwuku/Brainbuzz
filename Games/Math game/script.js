let score = 0;
let timeLeft = 10;
let timer;
let currentAnswer;

function generateProblem() {
    const operation = Math.random() < 0.5 ? '+' : '*';
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    currentAnswer = operation === '+' ? a + b : a * b;
    document.getElementById('problem').innerText = `${a} ${operation} ${b}`;
    startTimer();
}

function startTimer() {
    timeLeft = 10;
    document.getElementById('time').innerText = timeLeft;
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('message').innerText = "Time's up! The correct answer was " + currentAnswer;
            setTimeout(generateProblem, 2000);
        }
    }, 1000);
}


document.getElementById('submit').addEventListener('click', () => {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentAnswer) {
        score++;
        document.getElementById('message').innerText = "Correct!";
    } else {
        document.getElementById('message').innerText = "Wrong! The correct answer was " + currentAnswer;
    }
    document.getElementById('score').innerText = "Score: " + score;
    document.getElementById('answer').value = '';
    generateProblem();
});
function returnToHome() {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('categories').style.display = 'grid';
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('how-to-play').style.display = 'inline-block';
    return false;
}
// Start the game
generateProblem();
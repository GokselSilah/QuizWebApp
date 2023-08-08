const questions = [
    {
        question: "Türkiye uluslararası telefon kodu kaçtır?",
        answers: [
            {text: "+91", correct: false},
            {text: "+92", correct: false},
            {text: "+90", correct: true},
            {text: "+452", correct: false}

        ]
    },
    {
        question: "Ankara ne zaman başkent olmuştur?",
        answers: [
            {text: "1919", correct: false},
            {text: "1921", correct: false},
            {text: "1922", correct: false},
            {text: "1923", correct: true}

        ]
    },
    {
        question: "2017 yılında Türkiye'de asgari ücret kaç TL'dir?",
        answers: [
            {text: "1350", correct: false},
            {text: "1400", correct: true},
            {text: "1480", correct: false},
            {text: "1450", correct: false}

        ]
    },    {
        question: "Türkiye uluslararası telefon kodu kaçtır?",
        answers: [
            {text: "+91", correct: false},
            {text: "+92", correct: false},
            {text: "+90", correct: true},
            {text: "+452", correct: false}

        ]
    },
    {
        question: "Ankara ne zaman başkent olmuştur?",
        answers: [
            {text: "1919", correct: false},
            {text: "1921", correct: false},
            {text: "1922", correct: false},
            {text: "1923", correct: true}

        ]
    },
    {
        question: "2017 yılında Türkiye'de asgari ücret kaç TL'dir?",
        answers: [
            {text: "1350", correct: false},
            {text: "1400", correct: true},
            {text: "1480", correct: false},
            {text: "1450", correct: false}

        ]
    },
    {
        question: "Türkiye uluslararası telefon kodu kaçtır?",
        answers: [
            {text: "+91", correct: false},
            {text: "+92", correct: false},
            {text: "+90", correct: true},
            {text: "+452", correct: false}

        ]
    },
    {
        question: "Ankara ne zaman başkent olmuştur?",
        answers: [
            {text: "1919", correct: false},
            {text: "1921", correct: false},
            {text: "1922", correct: false},
            {text: "1923", correct: true}

        ]
    },
    {
        question: "2017 yılında Türkiye'de asgari ücret kaç TL'dir?",
        answers: [
            {text: "1350", correct: false},
            {text: "1400", correct: true},
            {text: "1480", correct: false},
            {text: "1450", correct: false}

        ]
    },    {
        question: "Türkiye uluslararası telefon kodu kaçtır?",
        answers: [
            {text: "+91", correct: false},
            {text: "+92", correct: false},
            {text: "+90", correct: true},
            {text: "+452", correct: false}

        ]
    },
    {
        question: "Ankara ne zaman başkent olmuştur?",
        answers: [
            {text: "1919", correct: false},
            {text: "1921", correct: false},
            {text: "1922", correct: false},
            {text: "1923", correct: true}

        ]
    },
    {
        question: "2017 yılında Türkiye'de asgari ücret kaç TL'dir?",
        answers: [
            {text: "1350", correct: false},
            {text: "1400", correct: true},
            {text: "1480", correct: false},
            {text: "1450", correct: false}

        ]
    }

];

const questionElement = document.getElementById("question-header")
const answerButton = document.getElementById("question-title")
const nextButton = document.getElementById("nextQuestion")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Sıradaki Soru"
    showQuestion();
    timerDiv.style.display = ""
    resetTimer()
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("questionChoice")
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer);
    })
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    resetTimer()
    var timerElement = document.getElementById("timerRange")

    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"  ){
            button.classList.add("correct")
        }
        button.disabled = true ;
    })
    nextButton.style.display = ""
}



nextButton.addEventListener("click",()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
} )

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} ' sorudan ${score} tane doğru bildiniz.`
    nextButton.innerHTML = "Tekrar Oyna"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
        resetTimer()
    }
    else{
        showScore();
    }
}


var timeLeft = 30
var timerDiv = document.getElementById("timer")
var timerElement = document.getElementById("timerRange")
var countDownTime = document.getElementById("countDown")

var timerId = setInterval(countdown,1000)


function countdown(){
    if(timeLeft==0){
        if(currentQuestionIndex < questions.length){
        currentQuestionIndex++
        showQuestion(currentQuestionIndex)
        resetTimer()
        }
        else{
            showScore()
            timerDiv.style.display = "none"
        }
    }    
    timerElement.disabled = true
    timerElement.value = timeLeft
    countDownTime.innerHTML = timeLeft
    timeLeft --
} 

function resetTimer(){
    timeLeft = 30
}

startQuiz();
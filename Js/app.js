const questions = [
    {
        question: "Avogadro sayısı nedir?",
        answers: [
            {text: "6.02 x 10^23", correct: true},
            {text: "3.14 x 10^7", correct: false},
            {text: "2.71 x 10^8", correct: false},
            {text: "1.38 x 10^23", correct: false}
        ]
    },
    {
        question: "DNA'nın tam adı nedir?",
        answers: [
            {text: "Deoksiribonükleik asit", correct: true},
            {text: "Dinükleotit asit", correct: false},
            {text: "Deoksiriboz asit", correct: false},
            {text: "Dinükleer asit", correct: false}
        ]
    },
    {
        question: "İstanbul hangi yılda fethedildi?",
        answers: [
            {text: "1451", correct: false},
            {text: "1452", correct: false},
            {text: "1453", correct: true},
            {text: "1454", correct: false}
        ]
    },
    {
        question: "Dünya'nın en kalabalık ülkesi hangisidir?",
        answers: [
            {text: "Amerika", correct: false},
            {text: "Hindistan", correct: false},
            {text: "Çin", correct: true},
            {text: "Endonezya", correct: false}
        ]
    },
    {
        question: "İnsan vücudunda kaç tane kemik bulunur?",
        answers: [
            {text: "206", correct: true},
            {text: "196", correct: false},
            {text: "216", correct: false},
            {text: "256", correct: false}
        ]
    },
    {
        question: "Galileo Galilei hangi yüzyılda yaşamıştır?",
        answers: [
            {text: "16. Yüzyıl", correct: false},
            {text: "15. Yüzyıl", correct: false},
            {text: "17. Yüzyıl", correct: true},
            {text: "18. Yüzyıl", correct: false}
        ]
    },
    {
        question: "Dünya'nın en yüksek dağı hangisidir?",
        answers: [
            {text: "Aconcagua", correct: false},
            {text: "Everest", correct: true},
            {text: "K2", correct: false},
            {text: "Kilimanjaro", correct: false}
        ]
    },
    {
        question: "İnsan DNA'sında kaç çift baz bulunur?",
        answers: [
            {text: "23", correct: true},
            {text: "46", correct: false},
            {text: "22", correct: false},
            {text: "44", correct: false}
        ]
    },
    {
        question: "Hangi hayvanın en uzun ömrüdür?",
        answers: [
            {text: "Fil", correct: false},
            {text: "Papağan", correct: false},
            {text: "Deniz kaplumbağası", correct: true},
            {text: "Köpek balığı", correct: false}
        ]
    },
    {
        question: "Bilgisayar dünyasında 'CPU' ne anlama gelir?",
        answers: [
            {text: "Central Processing Unit", correct: true},
            {text: "Central Power Unit", correct: false},
            {text: "Computer Processing Unit", correct: false},
            {text: "Central Performance Unit", correct: false}
        ]
    },
    {
        question: "Hangi elementin sembolü 'Au' dur?",
        answers: [
            {text: "Argon", correct: false},
            {text: "Alüminyum", correct: false},
            {text: "Altın", correct: true},
            {text: "Amonyak", correct: false}
        ]
    },
    {
        question: "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?",
        answers: [
            {text: "Venüs", correct: false},
            {text: "Dünya", correct: false},
            {text: "Mars", correct: true},
            {text: "Jüpiter", correct: false}
        ]
    },
    {
        question: "Hangi devlet adamı 'Demir Perde' tabirini ilk kullanan kişidir?",
        answers: [
            {text: "Franklin D. Roosevelt", correct: false},
            {text: "Winston Churchill", correct: true},
            {text: "Joseph Stalin", correct: false},
            {text: "Harry Truman", correct: false}
        ]
    },
    {
        question: "Osmanlı Devleti'nin kuruluş yılı hangisidir?",
        answers: [
            {text: "1453", correct: false},
            {text: "1299", correct: true},
            {text: "1071", correct: false},
            {text: "1326", correct: false}
        ]
    },
    {
        question: "Hangi filozof 'Bilgi Güçtür' ifadesinin sahibidir?",
        answers: [
            {text: "Platon", correct: false},
            {text: "Descartes", correct: false},
            {text: "Francis Bacon", correct: true},
            {text: "Immanuel Kant", correct: false}
        ]
    },
    {
        question: "Hangi yazar '1984' adlı eserin yazarıdır?",
        answers: [
            {text: "Fyodor Dostoyevski", correct: false},
            {text: "Ernest Hemingway", correct: false},
            {text: "George Orwell", correct: true},
            {text: "Franz Kafka", correct: false}
        ]
    },
    {
        question: "Pi sayısının virgülden sonraki ilk 3 hanesi nedir?",
        answers: [
            {text: "141", correct: true},
            {text: "159", correct: false},
            {text: "123", correct: false},
            {text: "111", correct: false}
        ]
    },
    {
        question: "Hangi sanatçı 'Mona Lisa' tablosunun yaratıcısıdır?",
        answers: [
            {text: "Pablo Picasso", correct: false},
            {text: "Vincent van Gogh", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Michelangelo", correct: false}
        ]
    },
    {
        question: "Hangi ülke Asya ve Avrupa kıtaları üzerinde topraklara sahiptir?",
        answers: [
            {text: "Almanya", correct: false},
            {text: "Çin", correct: false},
            {text: "Türkiye", correct: true},
            {text: "İspanya", correct: false}
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
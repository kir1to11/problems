let quiz_btn = document.querySelector(".quiz_start")
let quiz_title = document.querySelector(".quiz_title")
let quiz_ans_box = document.querySelector(".quiz_ans_box")
let quiz_answers = document.querySelectorAll(".quiz_ans")
let nextBtn = document.querySelector(".next-btn");
let resultPopup = document.querySelector(".result-popup");
let resultText = document.querySelector(".result-text");

let ts_logo = document.querySelectorAll('.hidden-img-entry')


var currentQuestion = 0
var score = 0


let showTeamBtn = document.querySelector('.show-team-btn');
var tsTeamDiv = document.querySelector('.ts-team');
var arrowImg = document.querySelector(".arrow-img")

showTeamBtn.onclick = showTeam

function showTeam() {
    if (tsTeamDiv.style.display === 'flex') {
        tsTeamDiv.style.display = 'none';
        arrowImg.classList.add('down')
        arrowImg.classList.remove('up')
    } else {
        tsTeamDiv.style.display = 'flex';
        arrowImg.classList.remove('down')
        arrowImg.classList.add('up')
    }
};

function showIframe(iframeId) {
    // Hide all iframes
    var iframes = document.querySelectorAll('.iframes iframe');
    iframes.forEach(function(iframe) {
      iframe.style.display = 'none';
    });

    // Show the selected iframe
    var selectedIframe = document.getElementById(iframeId);
    if (selectedIframe) {
      selectedIframe.style.display = 'block';
    }
  }


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let questionsList = [
    {
        question:"Какой герой считается 'ночным кошмаром' для большинства других героев в Dota 2 из-за своей способности стихии тьмы?",
        answers:["Phantom Assassin", "Night Stalker", "Dark Seer", "Drow Ranger"],
        correctAnswer:"2"
    },
    {
        question:"Какой герой славится своими ловкими движениями и уникальной способностью Teleportation?",
        answers:["Underlord", "Pudge", "Anti Mage", "Nature`s Prophet"],
        correctAnswer:"4"
    },
    {
        question:"Какая роль в Dota 2 обычно отвечает за нанесение большого урона?",
        answers:["Керри", "Мидер", "Хардлайнер", "Сапорт"],
        correctAnswer:"1"
    },
    {
        question: "Какой предмет позволяет герою мгновенно вернуться на базу?",
        answers: ["Town Portal Scroll", "Blink Dagger", "Eul's Scepter of Divinity", "Force Staff"],
        correctAnswer: "1"
    },
    {
        question:"Какой герой славится своими ловкими движениями и уникальной способностью Teleportation?",
        answers:["Underlord", "Pudge", "Anti Mage", "Nature`s Prophet"],
        correctAnswer:"4"
    },
    {
        question:"Какой герой славится своими ловкими движениями и уникальной способностью Teleportation?",
        answers:["Underlord", "Pudge", "Anti Mage", "Nature`s Prophet"],
        correctAnswer:"4"
    },
    {
        question:"Какой герой славится своими ловкими движениями и уникальной способностью Teleportation?",
        answers:["Underlord", "Pudge", "Anti Mage", "Nature`s Prophet"],
        correctAnswer:"4"
    },
    {
        question:"Какой герой славится своими ловкими движениями и уникальной способностью Teleportation?",
        answers:["Underlord", "Pudge", "Anti Mage", "Nature`s Prophet"],
        correctAnswer:"4"
    },
    {
        question:"Какой герой славится своими ловкими движениями и уникальной способностью Teleportation?",
        answers:["Underlord", "Pudge", "Anti Mage", "Nature`s Prophet"],
        correctAnswer:"4"
    },
    {
        question:"Какой герой славится своими ловкими движениями и уникальной способностью Teleportation?",
        answers:["Underlord", "Pudge", "Anti Mage", "Nature`s Prophet"],
        correctAnswer:"4"
    }
]

questionsList = shuffleArray(questionsList);



function loadQuestion() {
    var currentQuiz = questionsList[currentQuestion];
    quiz_title.textContent = currentQuiz.question;
    for (var i = 0; i < currentQuiz.answers.length; i++) {
        document.getElementById('ans' + (i + 1)).textContent = currentQuiz.answers[i];
    }
}


function checkAnswer(selectedAnswer) {
    let currentQuiz = questionsList[currentQuestion];

    if (selectedAnswer == currentQuiz.correctAnswer) {
        score++;
        resultText.textContent = "Правильно! Ваш текущий счет: " + score;
    } else {
        resultText.textContent = "Неправильно. Ваш текущий счет: " + score;
    }

    resultPopup.style.display = "block";
    quiz_ans_box.style.display = "none";
    quiz_title.style.display = "none"
}

quiz_btn.onclick = startQuiz

function startQuiz(){
    quiz_btn.style.display = "none"
    quiz_ans_box.style.display = "grid"
    loadQuestion()
}


nextBtn.addEventListener("click", function () {
    resultPopup.style.display = "none";
    currentQuestion++;

    if (currentQuestion < questionsList.length) {
        loadQuestion();
        quiz_ans_box.style.display = 'grid';
        quiz_title.style.display = "block"
    } else {
        resultText.innerHTML = "Викторина закончилась. <br> Вы ответили правильно на " + score + " из " + questionsList.length + " вопросов. <br>";
        resultPopup.style.display = "block";
        nextBtn.style.display = "none"
    }
});








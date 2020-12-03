var timeEl = document.querySelector("#timer");
var buttonEl = document.querySelector('#start-button');
var questArea = document.querySelector('#question-area');
var scoreArea = document.querySelector('#Score-Page');
var noBttn = document.querySelector('#no');
var yesBttn = document.querySelector('#yes');
var userScore = document.querySelector('#prev-scores');
var userUser = document.querySelector('#prev-user');
var savebttn = document.getElementById('save');
var score = 0;
var qIndex = 0;


// Array of questions, choices, and answers
var questions = [{
    q: 'Commonly used data types DO NOT include:',
    ch: ['strings', 'booleans', 'alerts', 'numbers'],
    a: 'alerts'
},{
    q: 'The condition in an if/else statement is enclosed with:',
    ch: ['quotes', 'curley brackets', 'parentheses', 'square brackets'],
    a: 'curley brackets',
},{
    q: 'Arrays in JavaScript can be used to store ___:',
    ch: ['number strings', 'other array', 'booleans', 'all of the above'],
    a: 'all of the above',
},{
    q: 'String vaules must be enclosed within ____ when being assigned to variables.',
    ch: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    a: 'parentheses',
},{
    q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    ch: ['JavaScript', 'terminal/bash', 'loops', 'console log'],
    a: 'console log',
}


];

// Display and remove high score form

document.querySelector('#high-score-form').style.display = 'none';

function displayScoreForm(){
  document.querySelector('#high-score-form').style.display = 'block';
}

var viewScore = document.querySelector('#view-scores')

viewScore.addEventListener('click', function(event){
  event.preventDefault();

  document.querySelector('#description').style.display = 'none';
  document.querySelector('#question-area').style.display = 'none';
  document.querySelector('#Score-Page').style.display = 'none';
  displayScoreForm();
})

// Timer
var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if(qIndex === questions.length -1){
      clearInterval(timerInterval);
      alert('Good job! Your score is ' + score + '/' + questions.length);
      questArea.style.display = 'none';
      scoreArea.style.display = 'block';
    }
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert('Time is up! Your score is ' + score + '/' + questions.length);
      questArea.style.display = 'none';
      scoreArea.style.display = 'block';
    }
  }, 1000);
}

// function to switch from question to question
function renderQuestions(){
  document.querySelector('#question-header').textContent = questions[qIndex].q;
  document.querySelector('#button1').textContent = questions[qIndex].ch[0];
  document.querySelector('#button2').textContent = questions[qIndex].ch[1];
  document.querySelector('#button3').textContent = questions[qIndex].ch[2];
  document.querySelector('#button4').textContent = questions[qIndex].ch[3];
}

// Event listner for buttons

buttonEl.addEventListener('click', function(event){
    setTime();
    var startBtn = document.querySelector('#description');
    startBtn.style.display = 'none'
    questArea.style.display = 'block';
    renderQuestions();
    console.log(event.target)
});

// Event listner for choice & answer buttons. Also subtracts 10 seconds for each question wrong from timer and adds points to score

questArea.addEventListener('click', function(event){
  if(qIndex === questions.length -1){
    return;
  }
  if(event.target.type === 'button'){
    if(event.target.innerText === questions[qIndex].a){
      console.log(true);
      alert('Correct!');
      score++;
      qIndex++;
      renderQuestions();
    }
    else{
      console.log(false);
      alert('Wrong!');
      qIndex++;
      secondsLeft = secondsLeft -10;
      renderQuestions();
    }
  }
})

// Yes and no button functions

yesBttn.addEventListener('click', function(){
  scoreArea.style.display = 'none';
  document.querySelector('#high-score-form').style.display = 'block'
});

noBttn.addEventListener('click', function(){
  scoreArea.style.display = 'none';
  window.location = 'index.html'
});

// Display and store score and user info

function renderPrevScores(){
  var lastScore = localStorage.getItem(score);
  var lastUser = localStorage.getItem('lastUser');
  userScore.textContent = lastScore;
  userUser.textContent = lastUser;

  var heldScores = document.querySelector('#held-scores');

  heldScores.append(lastScore);
  heldScores.append(lastUser);

  return;
}

savebttn.addEventListener('click', function(event){
  event.preventDefault();

  var userName = document.querySelector('#user-name').value;

  localStorage.setItem(score, score);
  localStorage.setItem('lastUser', userName);
  renderPrevScores();
})
var timeEl = document.querySelector("#timer");
var buttonEl = document.querySelector('#start-button');
var questArea = document.querySelector('#question-area');
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

// Timer
var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if(qIndex === questions.length -1){
      clearInterval(timerInterval);
    }
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}


function renderQuestions(){
  document.querySelector('#question-header').textContent = questions[qIndex].q;
  document.querySelector('#button1').textContent = questions[qIndex].ch[0];
  document.querySelector('#button2').textContent = questions[qIndex].ch[1];
  document.querySelector('#button3').textContent = questions[qIndex].ch[2];
  document.querySelector('#button4').textContent = questions[qIndex].ch[3];
}

buttonEl.addEventListener('click', function(event){
    setTime();
    var startBtn = document.querySelector('#description');
    startBtn.style.display = 'none'
    questArea.style.display = 'block';
    renderQuestions();
    console.log(event.target)
});

questArea.addEventListener('click', function(event){
  if(qIndex === questions.length -1){
    return;
  }
  if(event.target.type === 'button'){
    if(event.target.innerText === questions[qIndex].a){
      console.log(true)
      score++;
      qIndex++;
      renderQuestions();
    }
    else{
      qIndex++;
      renderQuestions();
    }
  }
})


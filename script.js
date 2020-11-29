var timeEl = document.querySelector("#timer");
var buttonEl = document.querySelector('#start-button')
var q1Answer = document.querySelector('#alerts')
var questions = [{
    question: 'question1',
    choices: ['strings', 'booleans1', 'alerts', 'numbers'],
    answer: 'alerts'
},{
    question: 'question2',
    choices: ['quotes1', 'curleyBrackets1', 'parentheses1', 'squareBrackets'],
    answer: 'curleyBrackets1',
},{
    question: 'question3',
    choices: ['numberStrings', 'otherArr', 'booleans2', 'allAbove'],
    answer: 'allAbove',
},{
    question: 'question4',
    choices: ['commas', 'curlyBrackets2', 'quotes2', 'parentheses2'],
    answer: 'parentheses2',
},{
    question: 'question5',
    choices: ['js', 'terminalBash', 'loops', 'consoleLog'],
    answer: 'consoleLog',
}


];
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}
setTime();

buttonEl.addEventListener('click', function(){
    var startBtn = document.querySelector('#description');
    startBtn.style.display = 'none'
    document.querySelector('#question1').style.display = 'block';
});

q1Answer.addEventListener('click', function(){
    var answer1 = document.querySelector('#question1');
    answer1.style.display = 'none';
    document.querySelector('#question2').style.display = 'block';

});

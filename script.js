// --psuedocode--



// event listeners for buttons, (forEach)
// innerHTML dom manip. for question and answer propogation
// function that iterates correct class to randomize answers
// multiple html,css,js files to correspond to different page states
// sort w/ ternary to compare if answers are correct
// build readme, github pages

// --psuedocode--


const questions = [
  {
    question: 'console.log(Math.floor(10.64))',
    correctAnswer: '10',
    incorrectAnswer: ['undefined', '11', '1', '1064', '1.'],
    answeredRight: null,
  },
  {
    question: 'lorem ipsum2',
    correctAnswer: 'correctAnswer2',
    incorrectAnswer: ['wrongAnswer2', 'wrongAnswer22', 'wrongAnswer222'],
    answeredRight: null,
  },
  {
    question: 'lorem ipsum3',
    correctAnswer: 'correctAnswer3',
    incorrectAnswer: ['wrongAnswer3', 'wrongAnswer33', 'wrongAnswer333'],
    answeredRight: null,
  },
  {
    question: 'lorem ipsum4',
    correctAnswer: 'correctAnswer4',
    incorrectAnswer: ['wrongAnswer4', 'wrongAnswer44', 'wrongAnswer444'],
    answeredRight: null,
  },
  {
    question: 'lorem ipsum5',
    correctAnswer: 'correctAnswer5',
    incorrectAnswer: ['wrongAnswer5', 'wrongAnswer55', 'wrongAnswer555'],
    answeredRight: null,
  },
  {
    question: 'lorem ipsum6',
    correctAnswer: 'correctAnswer6',
    incorrectAnswer: ['wrongAnswer6', 'wrongAnswer66', 'wrongAnswer666'],
    answeredRight: null,
  },
  {
    question: 'lorem ipsum7',
    correctAnswer: 'correctAnswer7',
    incorrectAnswer: ['wrongAnswer7', 'wrongAnswer77', 'wrongAnswer777'],
    answeredRight: null,
  },
  {
    question: 'lorem ipsum8',
    correctAnswer: 'correctAnswer8',
    incorrectAnswer: ['wrongAnswer8', 'wrongAnswer88', 'wrongAnswer888'],
    answeredRight: null,
  },
  {
    question: 'lorem ipsum9',
    correctAnswer: 'correctAnswer9',
    incorrectAnswer: ['wrongAnswer9', 'wrongAnswer99', 'wrongAnswer999'],
    answeredRight: null,
  },
  {
    question: 'lorem ipsum10',
    correctAnswer: 'correctAnswer10',
    incorrectAnswer: ['wrongAnswer10', 'wrongAnswer101', 'wrongAnswer10'],
    answeredRight: null,
  },
];

let rand = Math.floor (Math.random () * questions.length);
let currentQuestion = questions[rand];
let buttons = document.querySelectorAll ('button');

// listener on next button to apply rand functionality
document.querySelector ('.next').addEventListener ('click', function () {
  rand = Math.floor (Math.random () * questions.length);
  currentQuestion = questions[rand];
  document.querySelector ('#ex-code').innerText = currentQuestion.question;
  document.querySelector ('#ans4').innerText =
   currentQuestion.incorrectAnswer[2];
  document.querySelector ('#ans3').innerText =
  currentQuestion.incorrectAnswer[1];
  document.querySelector ('#ans2').innerText =
  currentQuestion.incorrectAnswer[0];
  document.querySelector ('#ans1').innerText = currentQuestion.correctAnswer;
  document.querySelector ('.next').innerText ='Next Question'
});

// main tracking 
document.querySelector ('#button-answer').addEventListener('click', function(event){
if (event.target.innerText == currentQuestion.correctAnswer) {
console.log('correct');
questions.splice(currentQuestion)
} else {
  console.log('incorrect')
}});



// testing different dom methods to access elements
//  document.querySelector('h1').innerHTML = 'code test'
//let test = document.getElementsByClassName('button-field').addEventListener('click', function(e) {
//     if (e.target && e.target.nodeName == 'button'){
//     console.log('clicked')

// }
// test();

console.log (currentQuestion);

// --psuedocode--

// spent most of today reviewing basics and finishing hw

// event listeners for buttons, (forEach)
// innerHTML dom manip. for question and answer propogation
// function that iterates correct class to randomize answers
// arr of objects w/ properties to relate answers to questions //michael suggested
// multiple html,css,js files to correspond to different page states
// sort w/ ternary to compare if answers are correct
// build readme github pages

// --psuedocode--

//some syntax examples pulled from lab for reference
// const gameBoard = document.querySelector('.game-board');
// const gameHeader = document.querySelector('.game-header');
// const gameFooter = document.querySelector('.game-footer');

const questions = [
  {
    question: 'console.log(Math.floor(10.64))',
    correctAnswer: '10',
    incorrectAnswer: ['undefined','11','1','1064','1.'],
    answeredRight: null
  },{
    question: 'lorem ipsum2',
    correctAnswer: 'correctAnswer2',
    incorrectAnswer: ['wrongAnswer2','wrongAnswer22','wrongAnswer222','wrongAnswer2222','wrongAnswer22222'],
    answeredRight: null
  },{
    question: 'lorem ipsum3',
    correctAnswer: 'correctAnswer3',
    incorrectAnswer: ['wrongAnswer3','wrongAnswer33','wrongAnswer333','wrongAnswer3333','wrongAnswer33333'],
    answeredRight: null
  },{
    question: 'lorem ipsum4',
    correctAnswer: 'correctAnswer4',
    incorrectAnswer: ['wrongAnswer4','wrongAnswer44','wrongAnswer444','wrongAnswer4444','wrongAnswer44444'],
    answeredRight: null
  },{
    question: 'lorem ipsum5',
    correctAnswer: 'correctAnswer5',
    incorrectAnswer: ['wrongAnswer5','wrongAnswer55','wrongAnswer555','wrongAnswer5555','wrongAnswer55555'],
    answeredRight: null
  },{
    question: 'lorem ipsum6',
    correctAnswer: 'correctAnswer6',
    incorrectAnswer: ['wrongAnswer6','wrongAnswer66','wrongAnswer666','wrongAnswer6666','wrongAnswer66666'],
    answeredRight: null
  },{
    question: 'lorem ipsum7',
    correctAnswer: 'correctAnswer7',
    incorrectAnswer: ['wrongAnswer7','wrongAnswer77','wrongAnswer777','wrongAnswer7777','wrongAnswer77777'],
    answeredRight: null
  },{
    question: 'lorem ipsum8',
    correctAnswer: 'correctAnswer8',
    incorrectAnswer: ['wrongAnswer8','wrongAnswer88','wrongAnswer888','wrongAnswer8888','wrongAnswer88888'],
    answeredRight: null
  },{
    question: 'lorem ipsum9',
    correctAnswer: 'correctAnswer9',
    incorrectAnswer: ['wrongAnswer9','wrongAnswer99','wrongAnswer999','wrongAnswer9999','wrongAnswer99999'],
    answeredRight: null
  },{
    question: 'lorem ipsum10',
    correctAnswer: 'correctAnswer10',
    incorrectAnswer: ['wrongAnswer10','wrongAnswer101','wrongAnswer102','wrongAnswer103','wrongAnswer104'],
    answeredRight: null
  },
  git 
];


let rand = Math.floor (Math.random () * questions.length);
// let randWrong = Math.floor (Math.random () * incorrectAnswer.length);
let currentQuestion = questions[rand];
let buttons = document.querySelectorAll('button')

// listener on next button, need to apply rand functionality
document.querySelector('.next').addEventListener('click', function(){
   document.querySelector('.next').innerText='sup';
}) 
// heres where were grabbing thinsg


document.querySelector('#ex-code').innerText = questions[rand].question
document.querySelector('#ans6').innerText = questions[rand].incorrectAnswer[4] 
document.querySelector('#ans5').innerText = questions[rand].incorrectAnswer[3] 
document.querySelector('#ans4').innerText = questions[rand].incorrectAnswer[2] 
document.querySelector('#ans3').innerText = questions[rand].incorrectAnswer[1] 
document.querySelector('#ans2').innerText = questions[rand].incorrectAnswer[0] 
document.querySelector('#ans1').innerText = questions[rand].correctAnswer // append 'correct class'
// document.querySelector('.incorrect').innerText = questions[rand].incorrectAnswer[]


// testing different dom methods to access elements
//  document.querySelector('h1').innerHTML = 'code test'
 //let test = document.getElementsByClassName('button-field').addEventListener('click', function(e) {
//     if (e.target && e.target.nodeName == 'button'){
//     console.log('clicked')

// }
// test();

console.log (currentQuestion);

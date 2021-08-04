// --psuedocode--


// function that iterates correct class to randomize answers
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
    question: 'Which is Jeremy\'s favorite team?',
    correctAnswer: 'Rangers',
    incorrectAnswer: ['Islanders', 'Devils', 'Flyers'],
    answeredRight: null,
  },
  {
    question: 'When did the Westfold fall?',
    correctAnswer: '2758',
    incorrectAnswer: ['3542', '7', 'Middle Age'],
    answeredRight: null,
  },
  {
    question: 'What is the air-speed velocity of an unladen swallow?',
    correctAnswer: 'African or European',
    incorrectAnswer: ['Blue', 'Sir Galahad', 'Huh? I don\'t know that. Auugh'],
    answeredRight: null,
  },
  {
    question: 'When was the Magna Carta published?',
    correctAnswer: '1215',
    incorrectAnswer: ['1261', '1216', '1535'],
    answeredRight: null,
  },
  {
    question: 'Who fought for the right to party?',
    correctAnswer: 'Beastie Boys',
    incorrectAnswer: ['Baha Men', 'Boys2Men', 'Backstreet Boys'],
    answeredRight: null,
  },
  {
    question: 'Which work earned John Steinbeck a pulitzer in 1940?',
    correctAnswer: 'Grapes of Wrath',
    incorrectAnswer: ['Death of a Salesman', 'For Whom the Bell Tolls', 'A Streetcar Named Desire'],
    answeredRight: null,
  },
  {
    question: 'Which of these EGOT winners created "The Schwartz"?',
    correctAnswer: 'Mel Brooks',
    incorrectAnswer: ['Alan Menkin', 'Robert Lopez', 'Whoopi Goldberg'],
    answeredRight: null,
  },
  {
    question: 'Which Greek philosoper is said to have tutored Alexander',
    correctAnswer: 'Aristotle',
    incorrectAnswer: ['Plato', 'Epicurus', 'Socrates'],
    answeredRight: null,
  },
  {
    question: 'Over what ocean did Amelia Earhart disappear?',
    correctAnswer: 'Pacific',
    incorrectAnswer: ['Atlantic', 'Arctic', 'Indian'],
    answeredRight: null,
  },
];


let rand = Math.floor (Math.random () * questions.length);
let currentQuestion = questions[rand];
let buttons = document.querySelectorAll ('button');


function answer () {
  var element = currentQuestion.correctAnswer
  if(currentQuestion == element)
  console.log(element)
}

// listener on next button to pass in q's and a's 
document.querySelector ('.next').addEventListener ('click', function () {
  rand = Math.floor (Math.random () * questions.length);
  currentQuestion = questions[rand];
  //currentQuestion = questions.splice(rand, 1)
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

//correct/incorrect listener
document.querySelector('#button-answer').addEventListener('click', function(event){
if (event.target.innerText == currentQuestion.correctAnswer) {
 let userClick = event.target.innerHTML
console.log('userclick');


} else {
  console.log('incorrect')
}});



// --psuedocode--

// event listeners for buttons, (forEach)
// innerHTML dom manip. for question and answer propogation
// function that iterates correct class to randomize answers
// external sheet to relate answers to questions
// multiple html,css,js files to correspond to different page states 

// --psuedocode--


// some syntax examples pulled from lab for reference
const gameBoard = document.querySelector('.game-board');
const gameHeader = document.querySelector('.game-header');
const gameFooter = document.querySelector('.game-footer');


// testing different dom methods to access elements
 document.querySelector('h1').innerHTML = 'code test'
document.querySelector('#ex-code').innerText = 'next code'
let test = document.getElementsByClassName('button-field').addEventListener('click', function(e) {
    if (e.target && e.target.nodeName == 'button'){
    console.log('clicked')

}
test();


// console.log('works')
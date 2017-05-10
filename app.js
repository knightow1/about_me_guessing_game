'use strict';

alert('Let\'s play a guessing game to see how well you know Nick.');
alert('All questions require yes/no or y/n answers.');

var counter = 0;

while (true) {

  var music = prompt('First question: Does Nick play Jazz?').toLowerCase();
  console.log('user music: ', music);

  if (music === 'n' || music === 'no') {
    alert('You got it! Great job.');
    counter++;
    break;
  } else if (music === 'y' || music === 'yes') {
    alert('Too bad. That\'s wrong');
    break;
  } else {
    alert('That is not a valid answer.');
  }
}

while (true){

  var food = prompt('Second question: Is Nick\'s favorite food tacos?').toLowerCase();
  console.log('user food: ', food);

  if(food === 'n' || food === 'no') {
    alert('Another right answer. You\'re on a roll.');
    counter++;
    break;
  } else if (food === 'y' || food === 'yes') {
    alert('You thought you knew him, I guess not.');
    break;
  } else {
    alert('That is not a valid answer.');
  }
}

while (true) {

  var travel = prompt('Third question: Has Nick been to Burma?').toLowerCase();
  console.log('user travel: ', travel);

  if (travel === 'n' || travel === 'no') {
    alert('Wow you guys must be good friends.');
    counter++;
    break;
  } else if (travel === 'y' || travel === 'yes') {
    alert('Better luck next time.');
    break;
  } else {
    alert('That is not a valid answer.');
  }
}

while (true) {

  var color = prompt('Fourth question: Is Nick\'s favorite color green?').toLowerCase();
  console.log('user color: ', color);

  if (color === 'y' || color === 'yes') {
    alert('Good job. Almost done.');
    counter++;
    break;
  } else if (color === 'n' || color === 'yes') {
    alert('You must just be guessing...');
    break;
  } else {
    alert('That is not a valid answer.');
  }
}

while (true) {

  var games = prompt('Fifth question: Does Nick like to play video games?').toLowerCase();
  console.log('user game: ', games);

  if (games === 'y' || games === 'yes') {
    alert('Amazing.');
    counter++;
    break;
  } else if (games === 'n' || games === 'yes') {
    alert('Come on. Do you even know him?');
    break;
  } else {
    alert('That is not a valid answer.');
  }
}

alert('The last two questions are not yes/no and you can get multiple guesses.');
var number;

while (number !== 5) {

  number = parseInt(prompt('Sixth question: What is his favorite number?'));
  console.log('user number:', number);

  if (number < 5) {
    alert('Too low. Guess again.');
  } else if (number > 5){
    alert('Too high. Guess again.');
  } else if (isNaN(number) || number === null) {
    alert('Please enter a number.');
  } else {
    alert('Great Job!');
    counter++;
  }
}

alert('This last question has multiple right answers. Final question: Can you guess one of Nick\'s favorite animals?');

var animal = ['dogs', 'owls', 'bears'];
var answer = prompt('Your choices are cats, dogs, turtles, squids, bears, tigers, monekeys, eagles and owls').toLowerCase();
var flag;

for (answer)

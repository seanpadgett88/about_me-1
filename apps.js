'use strict';

var urName = prompt('Welcome to my page! What might your name be?');
alert('Well hello there friend ' + urName + ' thanks for stopping by! We\'re going to have a bit of fun. Prepare to be bombarded with questions!');

var error = 'Not to be bossy but I need a Y/N answer';
var dogQ = 'Tell me ' + urName + ' do you think I have a dog?';
var spiritAnimalQ = 'Now ' + urName + ' do you think cats my spirit animal?';
var owlQ = 'Do I have an owl tattoo, ' + urName + '?';
var wallsQ = urName + ', can I see through walls?';
var cutMeQ = 'If you cut me, ' + urName + ', will I bleed?';
var numQ = 'What number am I thinking of!?';
var questions = [dogQ, spiritAnimalQ, owlQ, wallsQ, cutMeQ, numQ];
var answers = ['YES', 'Y', 'YEP', 'YEA', 'NO', 'N', 'NOPE', 'NAH'];
var numCorrect = [];

var dog = prompt(questions[0]);
if (dog.toUpperCase() === answers[0] || dog.toUpperCase() === answers[1] || dog.toUpperCase() === answers[2] || dog.toUpperCase() === answers[3]) {
  alert('Sorry friend, I\'m a cat person through and through');
}else if (dog.toUpperCase() === answers[4] || dog.toUpperCase() === answers[5] || dog.toUpperCase() === answers[6] || dog.toUpperCase() === answers[7]) {
  alert('You are correct! Cats rule and dogs drool');
  numCorrect.push(1);
}else {
  alert(error);
}
console.log('Q: ' + dogQ);
console.log('A: ' + dog);

var spiritAnimal = prompt(questions[1]);
if (spiritAnimal.toUpperCase() === answers[0] || spiritAnimal.toUpperCase() === answers[1] || spiritAnimal.toUpperCase() === answers[2] || spiritAnimal.toUpperCase() === answers[3]) {
  alert('Incorrect! I, oddly enough, feel like a bear is my spirit animal');
}else if (spiritAnimal.toUpperCase() === answers[4] || spiritAnimal.toUpperCase() === answers[5] || spiritAnimal.toUpperCase() === answers[6] || spiritAnimal.toUpperCase() === answers[7]) {
  alert('That\'s right! I identify more with a bear');
  numCorrect.push(2);
}else {
  alert(error);
}
console.log('Q: ' + spiritAnimalQ);
console.log('A: ' + spiritAnimal);

var owl = prompt(questions[2]);
if (owl.toUpperCase() === answers[0] || owl.toUpperCase() === answers[1] || owl.toUpperCase() === answers[2] || owl.toUpperCase() === answers[3]) {
  alert('Heck yes I do! It is small and on my finger!');
  numCorrect.push(3);
}else if (owl.toUpperCase() === answers[4] || owl.toUpperCase() === answers[5] || owl.toUpperCase() === answers[6] || owl.toUpperCase() === answers[7]) {
  alert('Sorry friend but that isn\'t correct, I have one on my finger');
}else {
  alert(error);
}
console.log('Q: ' + owlQ);
console.log('A: ' + owl);

var walls = prompt(questions[3]);
if (walls.toUpperCase() === answers[0] || walls.toUpperCase() === answers[1] || walls.toUpperCase() === answers[2] || walls.toUpperCase() === answers[3]) {
  alert('I WISH! Unfortunately I am neither a super hero nor magical');
}else if (walls.toUpperCase() === answers[4] || walls.toUpperCase() === answers[5] || walls.toUpperCase() === answers[6] || walls.toUpperCase() === answers[7]) {
  alert('Sadly you are correct, I have no such abilities');
  numCorrect.push(4);
}else {
  alert(error);
}
console.log('Q: ' + wallsQ);
console.log('A: ' + walls);

var cutMe = prompt(questions[4]);
if (cutMe.toUpperCase() === answers[0] || cutMe.toUpperCase() === answers[1] || cutMe.toUpperCase() === answers[2] || cutMe.toUpperCase() === answers[3]) {
  alert('You\'re right! Please don\'t do it');
  numCorrect.push(5);
}else if (cutMe.toUpperCase() === answers[4] || cutMe.toUpperCase() === answers[5] || cutMe.toUpperCase() === answers[6] || cutMe.toUpperCase() === answers[7]) {
  alert('That is wrong for I am only human');
}else {
  alert(error);
}
console.log('Q: ' + cutMeQ);
console.log('A: ' + cutMe);

console.log('Q: Can you guess my favorite number?');
var triesLeft = 4;
for (var i = 0; i < 4; i++){
  var numGuess = prompt(urName + ' can you guess my favorite number?! I\'ll give you ' + triesLeft + ' chances.');
  if (numGuess === '42'){
    alert('You got it!');
    numCorrect.push(6);
    i += 5;
  }else if (i < 3 && parseInt(numGuess) < 42){
    alert('Too low! Keep trying!');
    triesLeft--;
    console.log('A: ' + numGuess);
  }else if(i < 3 && parseInt(numGuess) > 42){
    alert('Too high! Keep trying!');
    triesLeft--;
  }else{
    alert('Sorry, the answer was 42');
  }
}
console.log('A: ' + numGuess);

var catNames = ['PRINCESS', 'LITTLE FLUFFY NUGGET', 'BRAT', 'FLUFFBUTT'];

console.log('Q: Can you guess my cats nickname?');
for (i = 0; i < 6; i++){
  var catNameGuess = prompt('Can you guess any of the ' + catNames.length + ' nicknames for my cat? I\'ll give you 6 tries ' + urName + '!');
  if (catNames.includes(catNameGuess.toUpperCase())){
    alert('Yea it is! I would have also accept ' + catNames + ' .');
    numCorrect.push(7);
    i += 7;
  }else if (i < 5){
    alert('Nope! I definitely don\'t call her that!');
    console.log('A: ' + catNameGuess);
  }else {
    alert('Out of guesses! I would have accepted ' + catNames + ' .');
  }
}
console.log('A: ' + catNameGuess);

alert('Congratulations ' + urName + '! You got to the end of my little question storm! You managed to get ' + numCorrect.length + ' out of 7 correct!');

'use strict';

var error = 'Not to be bossy but I need a Y/N answer';
var dogQ = 'Do I have a dog?';
var spiritAnimalQ = 'Are cats my spirit animal?';
var owlQ = 'Do I have an owl tattoo?';
var wallsQ = 'Can I see through walls?';
var cutMeQ = 'If you cut me, will I bleed?';
var questions = [dogQ, spiritAnimalQ, owlQ, wallsQ, cutMeQ];
var answers = ['YES', 'Y', 'YEP', 'YEA', 'NO', 'N', 'NOPE', 'NAH'];

var dog = prompt(questions[0]);
if (dog.toUpperCase() === answers[0] || answers[1] || answers[2] || answers[3]) {
  alert('Sorry friend, I\'m a cat person through and through');
}else if (dog.toUpperCase() === answers[4] || answers[5] || answers[6] || answers[7]) {
  alert('You are correct! Cats rule and dogs drool');
}else {
  alert(error);
}
console.log('Q: ' + dogQ);
console.log('A: ' + dog);

var spiritAnimal = prompt(questions[1]).toUpperCase();
if (spiritAnimal.toUpperCase() === answers[0]) || answers[1] || answers[2] || answers[3]) {
  alert('Incorrect! I, oddly enough, feel like a bear is my spirit animal');
}else if (spiritAnimal.toUpperCase() === answers[4] || answers[5] || answers[7] || answers[7]) {
  alert('That\'s right! I identify more with a bear');
}else {
  alert(error);
}
console.log('Q: ' + spiritAnimalQ);
console.log('A: ' + spiritAnimal);

var owl = prompt(questions[2]).toUpperCase();
if (owl.toUpperCase() === answers[0] || answers[1] || answers[2] || answers[3]) {
  alert('Heck yes I do! It is small and on my finger!');
}else if (owl === answers[4] || answers[5] || answers[6] || answers[7]) {
  alert('Sorry friend but that isn\'t correct, I have one on my finger');
}else {
  alert(error);
}
console.log('Q: ' + owlQ);
console.log('A: ' + owl);

var walls = prompt(questions[3]).toUpperCase();
if (walls === answers[0] || answers[1] || answers[2] || answers[3]) {
  alert('I WISH! Unfortunately I am neither a super hero nor magical');
}else if (walls === answers[4] || answers[5] || answers[6] || answers[7]) {
  alert('Sadly you are correct, I have no such abilities');
}else {
  alert(error);
}
console.log('Q: ' + wallsQ);
console.log('A: ' + walls);

var cutMe = prompt(questions[4]).toUpperCase();
if (cutMe === answers[0] || answers[1] || answers[2] || answers[3]) {
  alert('You\'re right! Please don\'t do it');
}else if (cutMe === answers[4] || answers[5] || answers[6] || answers[7]) {
  alert('That is wrong for I am only human');
}else {
  alert(error);
}
console.log('Q: ' + cutMeQ);
console.log('A: ' + cutMe);

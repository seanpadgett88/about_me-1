'use strict';

var error = 'Not to be bossy but I need a Y/N answer';
var dogQ = 'Do I have a dog?';
var spiritAnimalQ = 'Are cats my spirit animal?';
var owlQ = 'Do I have an owl tattoo?';
var wallsQ = 'Can I see through walls?';
var cutMeQ = 'If you cut me, will I bleed?';

var dog = prompt(dogQ).toUpperCase();
if (dog === 'YES' || dog === 'Y' || dog === 'YEP') {
  alert('Sorry friend, I\'m a cat person through and through');
}else if (dog === 'NO' || dog === 'N' || dog === 'NOPE') {
  alert('You are correct! Cats rule and dogs drool');
}else {
  alert(error);
}
console.log('Q: ' + dogQ);
console.log('A: ' + dog);

var spiritAnimal = prompt(spiritAnimalQ).toUpperCase();
if (spiritAnimal === 'YES' || spiritAnimal === 'Y' || spiritAnimal === 'YEP') {
  alert('Incorrect! I, oddly enough, feel like a bear is my spirit animal');
}else if (spiritAnimal === 'NO' || spiritAnimal === 'N' || spiritAnimal === 'NOPE') {
  alert('That\'s right! I identify more with a bear');
}else {
  alert(error);
}
console.log('Q: ' + spiritAnimalQ);
console.log('A: ' + spiritAnimal);

var owl = prompt(owlQ).toUpperCase();
if (owl === 'YES' || owl === 'Y' || owl === 'YEP') {
  alert('Heck yes I do! It is small and on my finger!');
}else if (owl === 'NO' || owl === 'N' || owl === 'NOPE') {
  alert('Sorry friend but that isn\'t correct, I have one on my finger');
}else {
  alert(error);
}
console.log('Q: ' + owlQ);
console.log('A: ' + owl);

var walls = prompt(wallsQ).toUpperCase();
if (walls === 'YES' || walls === 'Y' || walls === 'YEP') {
  alert('I WISH! Unfortunately I am neither a super hero nor magical');
}else if (walls === 'NO' || walls === 'N' || walls === 'NOPE') {
  alert('Sadly you are correct, I have no such abilities');
}else {
  alert(error);
}
console.log('Q: ' + wallsQ);
console.log('A: ' + walls);

var cutMe = prompt(cutMeQ).toUpperCase();
if (cutMe === 'YES' || cutMe === 'Y' || cutMe === 'YEP') {
  alert('You\'re right! Please don\'t do it');
}else if (cutMe === 'NO' || cutMe === 'N' || cutMe === 'NOPE') {
  alert('That is wrong for I am only human');
}else {
  alert(error);
}
console.log('Q: ' + cutMeQ);
console.log('A: ' + cutMe);

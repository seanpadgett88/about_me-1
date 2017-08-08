'use strict';

var error = 'Hey now! That\'s not a real answer!';

var dog = prompt('Do I have a dog?').toUpperCase();
if (dog == 'YES' || dog == 'Y') {
  alert('Sorry friend, I\'m a cat person through and through');
}else if (dog == 'NO' || dog == 'N') {
  alert('You are correct! Cats rule and dogs drool');
}else {
  alert(error);
}

var spiritAnimal = prompt('Are cats my spirit animal?').toUpperCase();
if (spiritAnimal == 'YES' || spiritAnimal == 'Y') {
  alert('Incorrect! I, oddly enough, feel like a bear is my spirit animal');
}else if (spiritAnimal == 'NO' || spiritAnimal == 'N') {
  alert('That\'s right! I identify more with a bear');
}else {
  alert(error);
}

var owl = prompt('Do I have an owl tattoo?').toUpperCase();
if (owl == 'YES' || owl == 'Y') {
  alert('Heck yes I do! It is small and on my finger!');
}else if (owl == 'NO' || owl == 'N') {
  alert('Sorry friend but that isn\'t correct, I have one on my finger');
}else {
  alert(error);
}

var walls = prompt('Can I see through walls?').toUpperCase();
if (walls == 'YES' || walls == 'Y') {
  alert('I WISH! Unfortunately I am neither a super hero nor magical');
}else if (walls == 'NO' || walls == 'N') {
  alert('Sadly you are correct, I have no such abilities');
}else {
  alert(error);
}

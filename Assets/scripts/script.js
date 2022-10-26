console.log("Script linked ok!");

let dictEasy = ['cat', 'dog', 'ball', 'foot', 'hand', 'head', 'rat', 'bag', 'sad', 'pat', 'leg', 'arm', 'car', 'bus', 'train'];
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let lettersTried = [];
let attemptsRemaining = 15;

console.log(alphabet);
let word = dictEasy[Math.floor(Math.random()*dictEasy.length)];
console.log(word);
let wordLength = word.length;
console.log(wordLength);

$('#word-display').empty();

for (let i = 0; i < word.length; i++){
    $('#word-display').append('_ ');
    console.log(i);
}

for(let i = 0; i < alphabet.length; i++){
    $('#keyboard').append(`<div id="${alphabet[i]}" class="keyboard">${alphabet[i]}</div>`);
}

$('.keyboard').click(function(){
    console.log(this.id)
    lettersTried.push(this.id)
    console.log(lettersTried);

})



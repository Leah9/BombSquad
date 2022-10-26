console.log("Script linked ok!");

let dictEasy = ['CAT', 'DOG', 'BALL', 'FOOT', 'HAND', 'HEAD', 'RAT', 'BAG', 'SAD', 'PAT', 'LEG', 'ARM', 'CAR', 'BUS', 'TRAIN'];
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let lettersTried = [];
let attemptsRemaining = 15;
let lettersCorrect = 0;

console.log(alphabet);
let word = dictEasy[Math.floor(Math.random() * dictEasy.length)];
console.log(word);
let wordLength = word.length;
console.log(wordLength);

$('#word-display').empty();

for (let i = 0; i < word.length; i++) {
    $('#word-display').append('_ ');
    console.log(i);
}

for (let i = 0; i < alphabet.length; i++) {
    $('#keyboard').append(`<div id="${alphabet[i]}" class="keyboard">${alphabet[i]}</div>`);
}

$('.keyboard').click(function () {
    console.log(this.id)
    
    for (letter in word) {
        console.log(letter + word)
        if (word[letter] == this.id) {
            console.log('CORRECT')
            $(this).addClass('green');
            lettersCorrect ++;

        }
    }
    
    lettersTried.push(this.id)
    console.log(lettersTried);
    $(this).addClass('red');
})



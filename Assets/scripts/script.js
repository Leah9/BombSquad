console.log("Script linked ok!");

// Set up array of words for easy mode
let dictEasy = ['CAT', 'DOG', 'BALL', 'FOOT', 'HAND', 'HEAD', 'RAT', 'BAG', 'SAD', 'PAT', 'LEG', 'ARM', 'CAR', 'BUS', 'TRAIN'];

// Set up array to contain our alphabet, this allows us to create the keyboard
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let lettersTried = []; // Array of letters that have been tried
let attemptsRemaining = 15; // Guesses remaining
let lettersCorrect = 0; // How manu letters have been guessed correctly

console.log(alphabet);
// Choose a random word from the dictEasy array
let word = dictEasy[Math.floor(Math.random() * dictEasy.length)];
console.log(word);
let wordLength = word.length;
console.log(wordLength);

$('#word-display').empty();
let wordDisplay = [];

// 
for (let i = 0; i < word.length; i++) {
    wordDisplay.push('_')
    console.log(i);
}

$('#word-display').text(wordDisplay);
console.log(wordDisplay);

for (let i = 0; i < alphabet.length; i++) {
    $('#keyboard').append(`<div id="${alphabet[i]}" class="keyboard">${alphabet[i]}</div>`);
}

function updateWordDisplay()
{
    $('#word-display').text('');
    for(letter in wordDisplay)
    {
        $('#word-display').append(wordDisplay[letter]);
    }
   
}

$('.keyboard').click(function () {
    console.log(this.id)
    
    for (letter in word) {
        //console.log(letter + word)
        if (word[letter] == this.id) {
            console.log('CORRECT')
            $(this).addClass('green');
            wordDisplay[letter] = this.id;
            console.log(wordDisplay);
            updateWordDisplay();
            lettersCorrect ++;

        }
    }
    
    lettersTried.push(this.id)
    console.log(lettersTried);
    $(this).addClass('red');
})



window.addEventListener('load', init);


let time = 8;
let score = 0;
let isPlaying;


const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
    'apple',
    'around',
    'between',
    'kitchen',
    'lawyer',
    'lead',
    'itself',
    'machine',
    'community',
    'conference',
    'Congress',
    'mission',
    'morning',
    'nothing',
    'opportunity',
    'option',
    'organization',
    'others',
    'people',
    'per',
    'yo',
    'zebra',
    'atif',
    'wth',
    'argentina',
    'billieeilish',
    'moneyhiest',
    'kluas',
    'theoriginal',
    'zip',
    'carrot',
    'suits',
    'netflix',
    'punisher',
    'walkingdead',
    'gameofthrones',
    'justin',
    'theoc',
    'outerbanks',
    'vampiredairy',
    'riverdale'
];


function init() {

    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);

}

function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = 9;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}


function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;

    }
}


function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;

}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}
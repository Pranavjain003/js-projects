let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lastSlot = document.querySelector('.lastResult')
const loORhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuesses = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number!")
    }else if(guess < 1){
        alert("Please enter a number greater than 1 !")
    }else if(guess > 100){
        alert("Please enter a number less than 100 !")
    }else{
        prevGuesses.push(guess);
        if(numGuesses ===11){
            displayGuess(guess)
            displayMessage(`Game over! Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("Voila! You guessed it right.")
    }else if (guess < randomNumber){
        displayMessage("Oops! Number is too low.")
    }else if (guess > randomNumber){
        displayMessage("Oops! Number is too high.")
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuesses++;
    lastSlot.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message){
    loORhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newgame">Start new Game!</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
   const newgameButton = document.querySelector('#newgame')
   newgameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = []
    numGuesses = 1
    playGame = true
    guessSlot.innerHTML = '';
    lastSlot.innerHTML = `${11 - numGuesses} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
   })
}



const VALID_CHOICES = ['rock', 'paper', 'scissors'];

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const capitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

const getComputerChoice = () => {
    const randomIndex = getRandomInt(VALID_CHOICES.length);
    
    return VALID_CHOICES[randomIndex];
}

const mapPlayerChoice = (playerChoice) => {
    switch (playerChoice) {
        case '✊':
            return 'rock'
        case '✋':
            return 'paper'
        case '✌️':
            return 'scissors'
    }
}

const playRound = (playerSelection, computerSelection) => {
    const caseInsPlayerSelection = playerSelection.toLowerCase();
    const caseInsComputerSelection = computerSelection.toLowerCase();

    let result;

    // Calculate result
    switch (caseInsPlayerSelection) {
        case 'rock':
            if (caseInsComputerSelection === 'scissors') {
                result = 'win';
            } else if (caseInsComputerSelection === 'paper') {
                result = 'lose';
            } else {
                result = 'draw'
            }

            break;
        case 'paper':
            if (caseInsComputerSelection === 'rock') {
                result = 'win';
            } else if (caseInsComputerSelection === 'scissors') {
                result = 'lose';
            } else {
                result = 'draw'
            }

            break;
        case 'scissors':
            if (caseInsComputerSelection === 'paper') {
                result = 'win';
            } else if (caseInsComputerSelection === 'rock') {
                result = 'lose';
            } else {
                result = 'draw'
            }

            break;
    }

    switch (result) {
        case 'win':
            return `You Win! ${capitalize(caseInsPlayerSelection)} beats ${caseInsComputerSelection}`;
        case 'lose':
            return `You Lose! ${capitalize(caseInsComputerSelection)} beats ${caseInsPlayerSelection}`;
        default:
            return `Draw! You both choose ${caseInsPlayerSelection}`;
    }
}

const writeMessageToGameConsole = (msg) => {
    const gameConsole = document.querySelector('#console');
    gameConsole.textContent = msg;
}

const updatePlayerScore = (newScore) => {
    const score = document.querySelector('#player-score');
    score.textContent = `Player Score: ${newScore}`;
}

const updateComputerScore = (newScore) => {
    const score = document.querySelector('#computer-score');
    score.textContent = `Computer Score: ${newScore}`;
}

const toggleGameButtonsEnable = (enable) => {
    const gameButtons = document.querySelectorAll('.game-button');

    gameButtons.forEach((button) => {
        button.disabled = !enable;
    });
}

const toggleResetButtonVisibility = (visible) => {
    const resetGameButton = document.querySelector('#reset-game-button');
    resetGameButton.hidden = !visible
}

const playGame = (e) => {
    const choice = mapPlayerChoice(e.target.textContent);

    const result = playRound(choice, getComputerChoice());
    writeMessageToGameConsole(result);

    if (result.startsWith('You Win!')) {
        updatePlayerScore(++playerScore)
    } else if (result.startsWith('You Lose!')) {
        updateComputerScore(++computerScore)
    }

    if (playerScore === 5 || computerScore === 5) {
        let msg = playerScore === 5 ? 'You Win!' : 'You Lose!';

        writeMessageToGameConsole(msg);

        toggleGameButtonsEnable(false);
        toggleResetButtonVisibility(true);
    }
}

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;

    updatePlayerScore(0);
    updateComputerScore(0);
    writeMessageToGameConsole('Please enter your choice:')

    toggleGameButtonsEnable(true);
    toggleResetButtonVisibility(false);    
}

// Main Logic

let playerScore = 0, computerScore = 0;

const gameButtons = document.querySelectorAll('.game-button');

gameButtons.forEach((button) => {
  button.addEventListener('click', playGame);
});

const resetGameButton = document.querySelector('#reset-game-button');

resetGameButton.addEventListener('click', resetGame)
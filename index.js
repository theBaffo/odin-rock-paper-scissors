const VALID_CHOICES = ['rock', 'paper', 'scissors'];

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

const getComputerChoice = () => {
    const randomIndex = getRandomInt(VALID_CHOICES.length);
    
    return VALID_CHOICES[randomIndex];
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
            return `You Win! ${caseInsPlayerSelection} beats ${caseInsComputerSelection}`;
        case 'lose':
            return `You Lose! ${caseInsComputerSelection} beats ${caseInsPlayerSelection}`;
        default:
            return `Draw! You both choose ${caseInsPlayerSelection}`;
    }
}

const playGame = () => {
    console.log('Rock Paper Scissors Game!');

    let playerScore = 0, computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let choice = prompt(`Round ${i}! Please enter your choice:`);

        while (!VALID_CHOICES.includes(choice.toLowerCase())) {
            choice = prompt(`"${choice}" is not a valid value! Please enter your choice:`);
        }

        const result = playRound(choice, getComputerChoice());

        console.log(result);

        if (result.startsWith('You Win!')) {
            playerScore++;
        } else if (result.startsWith('You Lose!')) {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
    }

    console.log('Here is the result!');
    console.log('Player Score: ', playerScore);
    console.log('Computer Score: ', computerScore);

    if (playerScore > computerScore) {
        console.log('You Win!');
    } else if (playerScore < computerScore) {
        console.log('You Lose!');
    } else {
        console.log('Draw!');
    }
}

playGame();

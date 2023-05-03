const playBtn = document.querySelector('.intro button');
const  introScreen = document.querySelector('.intro');
const match = document.querySelector('.match');

let pScore = 0;
let cScore = 0;


playBtn.addEventListener('click', () => {
    introScreen.classList.add('unactive');
    match.classList.add('active');
});

//Play Match Function

function playMatch(){
    const options = document.querySelectorAll('.options button');
    const computerOptions = ['rock','paper','scissors'];
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hand img');

    options.forEach(option => {
        option.addEventListener('click', function(){
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(() => {
                computerHands(this.textContent, computerChoice);

                playerHand.src = `./Img/${this.textContent}.png`;
                computerHand.src = `./Img/${computerChoice}.png`;
            }, 2000);

            playerHand.style.animation = 'shakePlayer 3s ease';
            computerHand.style.animation = 'shakeComputer 3s ease';
        });
    });

    hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
            this.style.animation = "";
        });
    });
}
playMatch();

//Compare Hand Function 
function computerHands (playerChoice, computerChoice) {
    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
        winner.textContent = 'It is a Tie';
        return;
    }
    if(playerChoice === 'rock') {
        if(computerChoice === 'scissors'){
        winner.textContent = 'You Wins';
        pScore++;
        updateScore();
        return;
    }
    else{
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
    }
}
if(playerChoice === 'paper'){
    if(computerChoice === 'scissors'){
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
    }
    else{
        winner.textContent = 'You Wins';
        pScore++;
        updateScore();
        return;
    }
}
if(playerChoice === 'scissors'){
    if(computerChoice === 'rock'){
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
    }
    else{
        winner.textContent = 'You Wins';
        pScore++;
        updateScore();
        return;
    }
  }
  updateScore();
}

function updateScore(){
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}


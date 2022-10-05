'use strict';
 
// SELECTING ELEMENTS
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;


// SWITCHING PLAYER FUNCTION
const switchPlayer = function() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}


// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function(){

  if(playing) {

    // 1- Genereting a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

   // 2- Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `/img/dice-${dice}.png`;

    // 3- Checking for rolled 
    if(dice !== 1) {

    // Adding score to current score
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

    } else {
    switchPlayer();
    }
  }

})

// HOLDING SCORE BUTTON
btnHold.addEventListener('click', function() {

  if (playing) {

    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
 
    if (scores[activePlayer] >=100) {

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      document.querySelector(`#name--${activePlayer}`).textContent = 'WINNER 🎉'
      diceEl.classList.add('hidden');
      playing = false;


    }else { 

    // switching Player
      switchPlayer();

    }
  }
})
 
// NEW GAME BUTTON
btnNew.addEventListener('click', function(){
  currentScore = 0;
  current0El.textContent = 0;
  current0El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.querySelector(`#name--${activePlayer}`).textContent = `PLAYER ${activePlayer+1}`;

})
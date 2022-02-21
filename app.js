// alert('its working')

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const resetBtn = document.querySelector('#reset');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const selectWinningScore = document.querySelector('#playto');

let p1Score = 0; /* starting point should be zero for players
  */
let p2Score = 0;
let winnigScore = 5;
let isGameOver= false; /*  stop players from playing if one reaches 5 */

btn1.addEventListener('click', function() {
    if(!isGameOver){
        p1Score+=1;   /* Increment by 1 whenever it's clicked */
    if (p1Score === winnigScore){
        isGameOver = true;
        player1.classList.add('winner') /* make the color green when this player wins */
        player2.classList.add('loser') 

    }
    player1.textContent = p1Score;
}  
})

btn2.addEventListener('click', function() {
    if(!isGameOver){
        p2Score+=1; /* increment if the winnigScore isnt 5 yet */
    if (p2Score === winnigScore){
          isGameOver = true;  /* if p2Score reaches 5 stop playing */
          player1.classList.add('winner') /* make the color green when this player wins */
          player2.classList.add('loser') 
    }
    player2.textContent = p2Score; /* display scores for player in all scenario */
}
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;/*  restarts the scores so that begin from zero */
    player1.textContent = 0; /* display zero  */
    player2.textContent = 0;
}

selectWinningScore.addEventListener('change',  function() {
   winnigScore = parseInt(this.value);
    reset();


})
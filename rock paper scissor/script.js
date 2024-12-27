const btns=document.querySelectorAll('.btn');
const playerScore=document.querySelector('.player-score');
const computerScore=document.querySelector('.computer-score');

let playerScoreNum=0;
let computerScoreNum=0;
 
btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const computerChoice=getRandomChoice();
        const playerChoice=e.target.innerHTML;
        const result=getWinner(playerChoice, computerChoice);
})
}
)
function getRandomChoice(){
    const choices=['rock', 'paper', 'scissor'];
    const randomNum=Math.floor(Math.random()*3);
    return choices[randomNum];
}
function getWinner(playerChoice, computerChoice){
    if(playerChoice===computerChoice){
        alert('draw');
    }
    else if(playerChoice==='rock' && computerChoice==='scissor' || playerChoice==='paper' && computerChoice==='rock' || playerChoice==='scissor' && computerChoice==='paper'){
        alert('player wins');
        playerScoreNum++;
        playerScore.innerHTML = 'Player Score: ' + playerScoreNum;
    }
    else{
        alert('computer wins');
        computerScoreNum++;
        computerScore.innerHTML = 'Computer  Score: ' + computerScoreNum;
    }
}
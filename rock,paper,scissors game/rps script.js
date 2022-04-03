let playerScore=0;
let comScore=0;
let playerScoreDisply=document.querySelector(".player-score");
let computerScoreDisply=document.querySelector(".com-score");
let selectBtn=document.querySelectorAll(".icon button");
let showPlayerSel=document.querySelector(".player-game-dis");
let showComSel=document.querySelector(".com-game-dis");
let userChoice;
let computerChoice;

//for ramdom selection

let random=["fas fa-hand-rock","fas fa-hand-paper","fas fa-hand-scissors"];
let luckText=document.querySelector(".luck");
let chooseText=document.querySelector(".choose");

//game function for btn

    selectBtn.forEach((btn)=>{
        btn.addEventListener("click",function(e){
             userChoice=e.target.className;

            //  console.log(userChoice);

            showPlayerSel.className=userChoice;

            generateComChoose(); 

            getResult();
           
        })
    })

    function generateComChoose(){
         computerChoice=Math.floor(Math.random()*random.length);
        //console.log(randomNum);

        showComSel.className=random[computerChoice];

       // console.log(computerChoice)
    }

function getResult(){
    // it is tie game
    if (showPlayerSel.className==showComSel.className) {
        playerScoreDisply.innerHTML =  playerScoreDisply.innerHTML;
        computerScoreDisply.innerHTML = computerScoreDisply.innerHTML;
        luckText.innerHTML = "It's a Tie ! ";
        luckText.style.fontSize="25px";
        luckText.style.color = 'coral';
        chooseText.innerHTML = luckText.innerHTML;
        chooseText.style.fontSize="30px";
        chooseText.style.color = 'coral';

       // console.log("tie");
      }
      // if not tie  player wins
  
      if (showPlayerSel.className==random[0]&&showComSel.className==random[2]) {
          playerScore++;
        playerScoreDisply.innerHTML = playerScore;
        computerScoreDisply.innerHTML = computerScoreDisply.innerHTML;
        luckText.innerHTML = "You win ! ";
        luckText.style.fontSize="25px";
        luckText.style.color = 'green';
        chooseText.innerHTML = luckText.innerHTML;
        chooseText.style.fontSize="30px";
        chooseText.style.color = 'green';

       // console.log("player win");
      }
      if (showPlayerSel.className==random[1]&&showComSel.className==random[0]) {
        playerScore++;
      playerScoreDisply.innerHTML = playerScore;
      computerScoreDisply.innerHTML = computerScoreDisply.innerHTML;
      luckText.innerHTML = "You win ! ";
      luckText.style.fontSize="25px";
      luckText.style.color = 'green';
      chooseText.innerHTML = luckText.innerHTML;
      chooseText.style.fontSize="30px";
      chooseText.style.color = 'green';

     // console.log("player win");
    }
    if (showPlayerSel.className==random[2]&&showComSel.className==random[1]) {
        playerScore++;
      playerScoreDisply.innerHTML = playerScore;
      computerScoreDisply.innerHTML = computerScoreDisply.innerHTML;
      luckText.innerHTML = "You win ! ";
      luckText.style.fontSize="25px";
      luckText.style.color = 'green';
      chooseText.innerHTML = luckText.innerHTML;
      chooseText.style.fontSize="30px";
      chooseText.style.color = 'green';

     // console.log("player win");
    }

    // computer wins 
    if (showPlayerSel.className==random[2]&&showComSel.className==random[0]) {
        comScore++;
      playerScoreDisply.innerHTML =playerScoreDisply.innerHTML;
      computerScoreDisply.innerHTML = comScore;
      luckText.innerHTML = "You lose ! ";
      luckText.style.fontSize="25px";
      luckText.style.color = 'red';
      chooseText.innerHTML = luckText.innerHTML;
      chooseText.style.fontSize="30px";
      chooseText.style.color = 'red';

     // console.log("computer wins");
    }
    if (showPlayerSel.className==random[0]&&showComSel.className==random[1]) {
        comScore++;
      playerScoreDisply.innerHTML = playerScoreDisply.innerHTML;
      computerScoreDisply.innerHTML = comScore;
      luckText.innerHTML = "You lose ! ";
      luckText.style.fontSize="25px";
      luckText.style.color = 'red';
      chooseText.innerHTML = luckText.innerHTML;
      chooseText.style.fontSize="30px";
      chooseText.style.color = 'red';

     // console.log("computer wins");
    }
    if (showPlayerSel.className==random[1]&&showComSel.className==random[2]) {
        comScore++;
      playerScoreDisply.innerHTML =playerScoreDisply.innerHTML;
      computerScoreDisply.innerHTML = comScore;
      luckText.innerHTML = "You lose ! ";
      luckText.style.fontSize="25px";
      luckText.style.color = 'red';
      chooseText.innerHTML = luckText.innerHTML;
      chooseText.style.fontSize="30px";
      chooseText.style.color = 'red';

     // console.log("computer wins");
    }

}
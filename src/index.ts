import {   cup1Selected, cup2Selected, cup3Selected, moveBall, moveCup1, moveCup3, moveUp, removeClasses, repositionItems, resetResultText, selectedCup, setResultText } from "./functions";
import { getScore, saveScore } from "./localStorage";
import { allCups, ball, cup1, cup2,cup3,losingScore,startButton, winningScore,} from "./Queryselectors";
import {  randomizer } from "./randomizer";

export const results = { lost: 0, won: 0};
export let randomNumber:number;
gameStart();

function gameStart():void{
    randomNumber = randomizer();
    getScore();
    resetResultText();
    startButton.addEventListener("click", moveUp, {once: true});
    startButton.addEventListener("click", ()=>{setTimeout(moveBall,1200)}, {once: true});
    startButton.addEventListener("click", ()=>{setTimeout(moveCup1,2800)}, {once: true});
    startButton.addEventListener("click", ()=>{setTimeout(moveCup3,2800)}, {once: true});
    startButton.addEventListener("click", ()=>{setTimeout(randomBallPosition,5000)}, {once: true});
}

function randomBallPosition():void{
switch(randomNumber){
    case 1: ball.style.left="31%"; 
    break;
    case 2: ball.style.left="50%";  
    break
    case 3: ball.style.left="69%"; 
    break;
}selectCup();
}

function selectCup():void{
    allCups.forEach(element => {
        element.classList.add("hoverCup");
    });
 cup1.addEventListener("click", cup1Selected);
 cup2.addEventListener("click", cup2Selected);
 cup3.addEventListener("click", cup3Selected);
}

export function showResult(){
    selectedCup.style.top="70px"
   compareResult();
   restartButton();
}

function compareResult():void{
    if(selectedCup===cup1&&randomNumber===1){
        setResultText("You win!");
        results.won += 1;
        winningScore.innerHTML = results.won;
    }else if(selectedCup===cup2&&randomNumber===2){
        setResultText("You win!");
        results.won += 1;
        winningScore.innerHTML = results.won;
    }else if(selectedCup===cup3&&randomNumber===3){
        setResultText("You win!");
        results.won += 1;
        winningScore.innerHTML = results.won;
    }else{
        setResultText("You lose!");
        results.lost += 1;
        losingScore.innerHTML = results.lost;
    }saveScore();
}

    function restartButton():void{
        removeClasses();
        startButton.innerHTML = "Restart the Game";
        startButton.addEventListener("click", repositionItems, {once: true});
        startButton.addEventListener("click", gameStart, {once: true});
     }


import { moveUp, moveBall, moveCup1, moveCup3, showCorrectCup } from "./animations";
import { cup1Selected, cup2Selected, cup3Selected, selectedCup } from "./cupSelection";
import { getScore, saveScore } from "./localStorage";
import { startButton, ball, cup1, cup2, cup3, allCups, winningScore, losingScore } from "./Queryselectors";
import { randomizer } from "./randomizer";
import { removeEventListeners, removeHoverEffect, removeClasses, repositionItems } from "./remove";
import { resetResultText, setResultText } from "./resultText";


export const results = { lost: 0, won: 0}; // Die Inspiration für das Speichern in einem object kam von deinem Schere-Stein-Papier Spiel
export let randomNumber:number;
export let correctCup:HTMLDivElement;
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
    case 1: ball.style.left="calc(25% + 100px)"; correctCup=cup1;
    break;
    case 2: ball.style.left="50%"; correctCup=cup2;
    break
    case 3: ball.style.left="calc(75% - 100px)"; correctCup=cup3; 
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

export function showResult():void{
    selectedCup.style.top="70px"
    compareResult();
    restartButton();
}

function compareResult():void{
    if(selectedCup===correctCup){
        setResultText("You win!");
        results.won += 1;
        winningScore.innerHTML = results.won;
    }else if(selectedCup===correctCup){
        setResultText("You win!");
        results.won += 1;
        winningScore.innerHTML = results.won;
    }else if(selectedCup===correctCup){
        setResultText("You win!");
        results.won += 1;
        winningScore.innerHTML = results.won;
    }else{
        setResultText("You lose!");
        showCorrectCup();
        results.lost += 1;
        losingScore.innerHTML = results.lost;
    }saveScore();
}

function restartButton():void{
    startButton.innerHTML = "Restart the Game";
    removeEventListeners();
    removeHoverEffect();
    startButton.addEventListener("click", removeClasses, {once: true});
    startButton.addEventListener("click", repositionItems, {once: true});
    startButton.addEventListener("click", gameStart, {once: true});
}


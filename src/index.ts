import {   cup1Selected, cup2Selected, cup3Selected, moveBall, moveCup1, moveCup3, moveUp, removeClasses, repositionItems, resetResultText, selectedCup, setResultText } from "./functions";
import { allCups, ball, cup1, cup2,cup3,resultText,startButton,} from "./Queryselectors";
import { randomizer } from "./randomizer";

gameStart();


function gameStart():void{
    resetResultText();
    randomizer;
    startButton.addEventListener("click", moveUp, {once: true});
    startButton.addEventListener("click", ()=>{setTimeout(moveBall,1200)}, {once: true});
    startButton.addEventListener("click", ()=>{setTimeout(moveCup1,2800)}, {once: true});
    startButton.addEventListener("click", ()=>{setTimeout(moveCup3,2800)}, {once: true});
    startButton.addEventListener("click", ()=>{setTimeout(randomBallPosition,5000)}, {once: true});
    
}

function randomBallPosition(e:UIEvent):void{
switch(randomizer){
    case 1: ball.style.left="30%"; 
    break;
    case 2: ball.style.left="50%";  
    break
    case 3: ball.style.left="70%"; 
    break;
}
selectCup();
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
    selectedCup.style.top="50px"
   compareResult();
   restartButton();
}

function compareResult(){
    if(selectedCup===cup1&&randomizer===1){
        setResultText("You win!");
    }else if(selectedCup===cup2&&randomizer===2){
        setResultText("You win!");
    }else if(selectedCup===cup3&&randomizer===3){
        setResultText("You win!");
    }else{
        setResultText("You lose!");
    }}

    function restartButton():void{
        
        removeClasses();
        startButton.innerHTML = "Restart the Game";
        startButton.addEventListener("click", repositionItems, {once: true});
        startButton.addEventListener("click", gameStart, {once: true});
        
     }


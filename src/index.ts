import {  moveBall, moveCup1, moveCup3, moveUp, selectCup } from "./functions";
import { ball, cup1, cup2,cup3,startButton,} from "./Queryselectors";
import { randomizer } from "./randomizer";

gameStart();
randomizer;


function gameStart():void{
    startButton.addEventListener("click", moveUp);
    startButton.addEventListener("click", ()=>{setTimeout(moveBall,1200)});
    startButton.addEventListener("click", ()=>{setTimeout(moveCup1,2800)});
    startButton.addEventListener("click", ()=>{setTimeout(moveCup3,2800)});
    startButton.addEventListener("click", ()=>{setTimeout(randomBallPosition,5000)});

    startButton.addEventListener("click", ()=>{setTimeout(selectCup,5000)});// Wie mache ich es eleganter ?
}

function randomBallPosition(e:UIEvent):void{
switch(randomizer){
    case 1: ball.style.left="30%"; console.log("case 1") //Wie löse ich das anders ?
    break;

    case 2: ball.style.left="50%"; console.log("case 2") 
    break;

    case 3: ball.style.left="70%"; console.log("case 3") 
    break;
}
}


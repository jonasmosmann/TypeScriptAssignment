import {   moveBall, moveCup1, moveCup3, moveUp, selectCup } from "./functions";
import { ball, cup1, cup2,cup3,startButton,} from "./Queryselectors";
import { randomizer } from "./randomizer";

gameStart();
randomizer;


function gameStart():void{
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
}selectCup();}


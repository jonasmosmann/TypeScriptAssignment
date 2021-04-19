import {  moveBall, moveCup1, moveCup3, moveUp } from "./functions";
import { ball, cup1, cup2,cup3,startButton,} from "./Queryselectors";
import { randomizer } from "./randomizer";

gameStart();
randomizer;


function gameStart():void{
    startButton.addEventListener("click", moveUp);
    startButton.addEventListener("click", ()=>{setTimeout(moveBall,1200)});
    startButton.addEventListener("click", ()=>{setTimeout(moveCup1,2800)});
    startButton.addEventListener("click", ()=>{setTimeout(moveCup3,2800)});
}

setTimeout( function randomBallPosition(e:UIEvent):void{
switch(randomizer){
    case 1: cup1.appendChild(ball);
    break;

    case 2: cup2.appendChild(ball);
    break;

    case 3: cup3.appendChild(ball);
    break;
}
ball.style.top="60%";
},5000);
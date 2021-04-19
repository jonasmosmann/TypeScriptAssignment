import { moveBall, moveCup1, moveCup3, moveUp } from "./functions";
import { startButton } from "./Queryselectors";

gameStart();

function gameStart():void{
    startButton.addEventListener("click", moveUp);
    startButton.addEventListener("click", moveBall);
    startButton.addEventListener("click", moveCup1);
    startButton.addEventListener("click", moveCup3);
}
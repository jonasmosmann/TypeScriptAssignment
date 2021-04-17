import { moveUp } from "./functions";
import { startButton } from "./Queryselectors";

function gameStart():void{
    startButton.addEventListener("click", moveUp);
}
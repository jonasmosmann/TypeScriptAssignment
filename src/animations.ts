import { correctCup } from "./index";
import { cup2, ball, cup1, cup3 } from "./Queryselectors";
import { disableStartButton } from "./startButton";

export function moveUp(): void {
    cup2.classList.add("animate-cup2");
    disableStartButton();
  }
  
  export function moveBall(): void {
    ball.style.top = "400px";
  }
  
  export function moveCup1(): void {
    cup1.classList.add("animate-cup1");
  }
  export function moveCup3(): void {
    cup3.classList.add("animate-cup3");
  }
  export function showCorrectCup(){
    correctCup.classList.add("animate-correct-cup");
  }
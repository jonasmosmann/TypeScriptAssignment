import { correctCup} from "./index";
import {allCups,ball,cup1,cup2,cup3,resultText,startButton,} from "./Queryselectors";
import { activateStartButton } from "./startButton";

export let selectedCup: HTMLDivElement; 

export function cup1Selected(): void {
  selectedCup = cup1;
  cup2.classList.remove("selected");
  cup3.classList.remove("selected");
  cup1.classList.add("selected");
  activateStartButton();
  startButton.innerHTML = "Chose Cup 1";
}
export function cup2Selected(): void {
  selectedCup = cup2;
  cup1.classList.remove("selected");
  cup3.classList.remove("selected");
  cup2.classList.add("selected");
  activateStartButton();
  startButton.innerHTML = "Chose Cup 2";
}
export function cup3Selected(): void {
  selectedCup = cup3;
  cup1.classList.remove("selected");
  cup2.classList.remove("selected");
  cup3.classList.add("selected");
  activateStartButton();
  startButton.innerHTML = "Chose Cup 3";
}

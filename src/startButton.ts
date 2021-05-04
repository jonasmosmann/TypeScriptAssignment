import { showResult } from "./index";
import { startButton } from "./Queryselectors";

export function disableStartButton() {
    startButton.disabled = true;
    startButton.style.backgroundColor = "rgb(174, 179, 187)";
    startButton.innerHTML = "Pick a Cup!";
  }
  
  export function activateStartButton() {
    startButton.style.backgroundColor = "#ffffff";
    startButton.disabled = false;
    startButton.addEventListener("click", showResult, { once: true });
  }
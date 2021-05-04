import { cup1Selected, cup2Selected, cup3Selected, selectedCup } from "./cupSelection";
import { correctCup } from "./index";
import { cup1, cup2, cup3, allCups, ball } from "./Queryselectors";

export function removeClasses(): void {
    cup1.classList.remove("animate-cup1");
    cup2.classList.remove("animate-cup2");
    cup3.classList.remove("animate-cup3");
    correctCup.classList.remove("animate-correct-cup");
    allCups.forEach((element) => {
      element.classList.remove("selected");
    });
  }
  
  export function removeEventListeners():void{
    cup1.removeEventListener("click", cup1Selected);
    cup2.removeEventListener("click", cup2Selected);
    cup3.removeEventListener("click", cup3Selected);
  }
  
  export function removeHoverEffect():void{
      allCups.forEach((element) => {
          element.classList.remove("hoverCup");
        });
  }
  
  export function repositionItems(): void {
    ball.style.top = "550px";
    ball.style.left = "50%";
    selectedCup.style.top = "";
  }
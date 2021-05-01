import { results, showResult } from "./index";
import { allCups, ball, cup1,cup2, cup3, losingScore, resultText, startButton, winningScore,} from "./Queryselectors";
import { randomizer } from "./randomizer";

export let selectedCup: HTMLDivElement; //wie überschreibe ich die Variablen?
export let wins:any;
export let losses:any;

export function moveUp():void{
    cup2.classList.add("animate-cup2");
    disableStartButton();
    }

    export function moveBall():void{
       ball.style.top= "400px";}

            export function moveCup1():void{
                cup1.classList.add("animate-cup1");
                }    
                export function moveCup3():void{
                    cup3.classList.add("animate-cup3");
                    }   
   

                    export function cup1Selected():void{
                        selectedCup=cup1;
                        cup2.classList.remove("selected")
                        cup3.classList.remove("selected")
                        cup1.classList.add("selected");
                        activateStartButton();
                    }
                    export function cup2Selected():void{
                        selectedCup=cup2;
                        cup1.classList.remove("selected")
                        cup3.classList.remove("selected")
                        cup2.classList.add("selected");
                        activateStartButton();
                    }
                    export function cup3Selected():void{
                        selectedCup=cup3;
                        cup1.classList.remove("selected")
                        cup2.classList.remove("selected")
                        cup3.classList.add("selected");
                        activateStartButton();
                    }

                   

                   function disableStartButton(){
                    startButton.disabled=true;
                    startButton.style.backgroundColor="grey";
                    startButton.innerHTML="Pick a Cup!"
                   }

                   function activateStartButton() {
                    startButton.innerHTML = "Chose Cup";
                    startButton.style.backgroundColor="#ffffff";
                    startButton.disabled = false;
                    
                    startButton.addEventListener("click", showResult, {once: true});
                }

               export function setResultText(text:string):void{
                    resultText.innerHTML=text;
                }
                export function resetResultText():void{
                    resultText.innerHTML="";
                }

                    

                    export function removeClasses():void{
                        cup1.removeEventListener("click", cup1Selected);
                        cup2.removeEventListener("click", cup2Selected);
                        cup3.removeEventListener("click", cup3Selected);

                        cup1.classList.remove("animate-cup1");
                        cup2.classList.remove("animate-cup2");
                        cup3.classList.remove("animate-cup3");
                        
                        allCups.forEach(element => {
                            element.classList.remove("selected");  
                            element.classList.remove("hoverCup");
                        });
                    }

                    export function repositionItems():void{
                        ball.style.top="550px";
                        ball.style.left="50%"
                        selectedCup.style.top=""
                    }


              

                


                /*
                export function selectCup(e:UIEvent) {
                    selectedChoice = e.target.id;
                    markSelectedChoice(e.target);
                    activateStartButton();
                }
                
                   export function showSelectedCup(selectedCup:HTMLElement) {
            
                    selectedCup.classList.add(".selected");
                }

                function removeSelectedCup() {
                        choice.classList.remove("bordered");
                        choice.parentElement.classList.remove("selected");
                    }*/
                    
                   



            
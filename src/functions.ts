import { allCups, ball, cup1,cup2, cup3, resultText, startButton,} from "./Queryselectors";
import { randomizer } from "./randomizer";

export let selectedCup: HTMLDivElement; //wie überschreibe ich die Variablen?

export function moveUp(e:UIEvent):void{
    cup2.classList.add("animate-cup2");
    disableStartButton();
    }

    export function moveBall(e:UIEvent):void{
       ball.style.top= "400px";}

            export function moveCup1(e:UIEvent):void{
                cup1.classList.add("animate-cup1");
                }    
                export function moveCup3(e:UIEvent):void{
                    cup3.classList.add("animate-cup3");
                    }   
   
                   export function selectCup():void{
                       allCups.forEach(element => {
                           element.classList.add("hoverCup");
                       });
                    cup1.addEventListener("click", cup1Selected);
                    cup2.addEventListener("click", cup2Selected);
                    cup3.addEventListener("click", cup3Selected);
                   }

                    function cup1Selected(){
                        selectedCup=cup1;
                        cup2.classList.remove("selected")
                        cup3.classList.remove("selected")
                        cup1.classList.add("selected");
                        activateStartButton();
                    }
                    function cup2Selected(){
                        selectedCup=cup2;
                        cup1.classList.remove("selected")
                        cup3.classList.remove("selected")
                        cup2.classList.add("selected");
                        activateStartButton();
                    }
                    function cup3Selected(){
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
                    
                    startButton.addEventListener("click", showResult);
                }

                    function restartButton():void{
                        cup1.removeEventListener("click", cup1Selected);
                    cup2.removeEventListener("click", cup2Selected);
                    cup3.removeEventListener("click", cup3Selected);
                    startButton.removeEventListener("click", showResult);

                        allCups.forEach(element => {
                            element.classList.remove("hoverCup");  
                        });
                    }

                function showResult(){
                    selectedCup.style.top="50px"
                   compareResult();
                   restartButton();
                }

                function compareResult(){
                    if(selectedCup===cup1&&randomizer===1){
                        setResultText("You win!");
                    }else if(selectedCup===cup2&&randomizer===2){
                        setResultText("You win!");
                    }else if(selectedCup===cup3&&randomizer===3){
                        setResultText("You win!");
                    }else{
                        setResultText("You lose!");
                    }}

                    function setResultText(text:string){
                        resultText.innerHTML=text;
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
                    
                   



            
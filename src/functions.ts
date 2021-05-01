import { results, showResult } from "./index";
import { allCups, ball, cup1,cup2, cup3, losingScore, resultText, startButton, winningScore,} from "./Queryselectors";
import { randomizer } from "./randomizer";

export let selectedCup: HTMLDivElement; //wie überschreibe ich die Variablen?
export let wins:any;
export let losses:any;

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
   

                    export function cup1Selected(){
                        selectedCup=cup1;
                        cup2.classList.remove("selected")
                        cup3.classList.remove("selected")
                        cup1.classList.add("selected");
                        activateStartButton();
                    }
                    export function cup2Selected(){
                        selectedCup=cup2;
                        cup1.classList.remove("selected")
                        cup3.classList.remove("selected")
                        cup2.classList.add("selected");
                        activateStartButton();
                    }
                    export function cup3Selected(){
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

               export function setResultText(text:string){
                    resultText.innerHTML=text;
                }
                export function resetResultText(){
                    resultText.innerHTML="";
                }

                    

                    export function removeClasses(){
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

                    export function repositionItems(){
                        ball.style.top="550px";
                        ball.style.left="50%"
                        selectedCup.style.top=""
                    }

                    export function saveScore(){
                           wins = results.won.toString();
                           losses = results.lost.toString();
                          localStorage.setItem("wins", wins);
                          localStorage.setItem("losses", losses);
                      }

                    export function getScore(){
                        wins = localStorage.getItem("wins");
                        losses = localStorage.getItem("losses");
                        if((wins==null||wins=="null")&&(losses==null||losses=="null")){
                            wins=0;
                            losses=0;
                        }
                        else if(wins==null||wins=="null"){
                            wins=0;
                        }else if(losses==null||losses=="null"){
                            losses=0;
                        }
                        results.won=parseInt(wins);
                        results.lost=parseInt(losses);
                        winningScore.innerHTML = results.won;
                        losingScore.innerHTML = results.lost;
                        
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
                    
                   



            
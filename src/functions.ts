import { allCups, ball, cup1,cup2, cup3, startButton,} from "./Queryselectors";

export let selectedCup: HTMLDivElement;

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
                       allCups.classList.add("hoverCup") //wieso funktioniert es nicht
                    cup1.addEventListener("click", ()=>{
                        selectedCup=cup1
                        cup2.classList.remove("selected")
                        cup3.classList.remove("selected")
                        cup1.classList.add("selected");
                        activateStartButton();
                    });
                    cup2.addEventListener("click", ()=>{
                        selectedCup=cup2
                        cup1.classList.remove("selected")
                        cup3.classList.remove("selected")
                        cup2.classList.add("selected");
                        activateStartButton();
                    });
                    cup3.addEventListener("click", ()=>{
                        selectedCup=cup3
                        cup1.classList.remove("selected")
                        cup2.classList.remove("selected")
                        cup3.classList.add("selected");
                        activateStartButton();
                    });

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
                    startButton.addEventListener("click", zeigeErgebnis);
                
                }

                function zeigeErgebnis(){
                    ball.style.position="fixed"
                    cup1.style.top="50px"
                    cup2.style.top="50px"
                    cup3.style.top="50px"
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
                    
                   



            
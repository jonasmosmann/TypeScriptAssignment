import { ball, cup1,cup2, cup3,} from "./Queryselectors";

export let selectedCup: String;

export function moveUp(e:UIEvent):void{
    cup2.classList.add("animate-cup2");
    }

    export function moveBall(e:UIEvent):void{
       ball.style.top= "400px";}

            export function moveCup1(e:UIEvent):void{
                cup1.classList.add("animate-cup1");
                }    
                export function moveCup3(e:UIEvent):void{
                    cup3.classList.add("animate-cup3");
                    }   
   
                   /* export function selectChoice(e:Event) {
                        CupNumber = (e.target as HTMLElement).id;
                        console.log(CupNumber);
                    }*/
                   export function selectCup(){
                    cup1.addEventListener("click", cup1func);
                    cup2.addEventListener("click", cup2func);
                    cup3.addEventListener("click", cup3func);
                   }

                    export function cup1func() {
                        selectedCup="cup1";
                        console.log(selectedCup);
                     }

                     export function cup2func() {
                        selectedCup="cup2";
                        console.log(selectedCup);
                     }
                     export function cup3func() {
                        selectedCup="cup3";
                        console.log(selectedCup);
                     }
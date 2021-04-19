import { ball, cup1, cup2, cup3, startButton } from "./Queryselectors";

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
import { results } from "./index";
import { winningScore, losingScore } from "./Queryselectors";

export let wins:any;
export let losses:any;

export function saveScore():void{
    wins = results.won.toString();
    losses = results.lost.toString();
   localStorage.setItem("wins", wins);
   localStorage.setItem("losses", losses);
}

export function getScore():void{
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
//THIS MODULE WILL BE TREESHAKED CAUSE ITS FUNCTIONS ARENT USED

//will not show up in the bundle
function unused() {
  return "hugh, why was this neccesary";
}

console.log(helloWorld);
customElements.define("my-beispiel", Beispiel);

alertMe();

const myInputValue = document.querySelector<HTMLInputElement>("#myInput");

const myInputValueAlternate = document.querySelector(
  "#myInput"
) as HTMLInputElement;

document
  .querySelector<HTMLInputElement>("#myInput")
  ?.addEventListener("focus", doSmth);

function doSmth(e: UIEvent) {
  const val = e.target as HTMLInputElement;
  console.log(e, val.value);
}

export const helloWorld: string = "Hello world";

export class Beispiel extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<h1>Hello World</h1>";
  }
}
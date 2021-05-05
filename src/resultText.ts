import { resultText } from "./Queryselectors";

export function setResultText(text: string): void {
  resultText.innerHTML = text;
}

export function resetResultText(): void {
  resultText.innerHTML = "";
}

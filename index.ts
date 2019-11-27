// Import stylesheets
import './style.css';
import { Pin } from "./Pin";
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
export class DetailViewState {
    public Pin: Pin;
}
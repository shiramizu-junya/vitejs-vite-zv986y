import { completeTodoComponent } from "../component/CompleteTodoComponent";

export class CompleteTodoController {
    initialize(rootElement: HTMLElement) {
        const completeTodoElm = completeTodoComponent();
        rootElement.insertAdjacentHTML('beforeend', completeTodoElm);
    }
}
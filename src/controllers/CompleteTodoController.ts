import { completeTodoComponent } from "../component/CompleteTodoComponent";
import { completeTodoItemComponent } from "../component/CompleteTodoItemComponent";

export class CompleteTodoController {
    initialize(rootElement: HTMLElement) {
        const completeTodoElm = completeTodoComponent();
        rootElement.insertAdjacentHTML('beforeend', completeTodoElm);
    }

    addTodo(todo: string) {
        const completeTodoElm = completeTodoItemComponent(todo);
        const completeTodoList = document.getElementById('js-complete-todo-list');
        if(!(completeTodoList instanceof HTMLElement)) {
            console.error('完了TODOの追加に失敗しました');
            alert('完了TODOの追加に失敗しました');
            return;
        }
        completeTodoList.insertAdjacentHTML('beforeend', completeTodoElm);
    }
}
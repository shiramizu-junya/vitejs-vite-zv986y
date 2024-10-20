import { notCompleteTodoComponent } from "../component/NotCompleteTodoComponent";
import { notCompleteTodoItemComponent } from "../component/NotCompleteTodoItem";

export class NotCompleteTodoController {
    initialize(rootElement: HTMLElement) {
        const notCompleteTodoElm = notCompleteTodoComponent();
        rootElement.insertAdjacentHTML('beforeend', notCompleteTodoElm);
    }

    addTodo(todo: string) {
        const notCompleteTodoElm = notCompleteTodoItemComponent(todo);
        const notCompleteTodoList = document.getElementById('js-not-complete-todo-list');
        if(!(notCompleteTodoList instanceof HTMLElement)) {
            console.error('未完了TODOの追加に失敗しました');
            alert('未完了TODOの追加に失敗しました');
            return;
        }
        notCompleteTodoList.insertAdjacentHTML('beforeend', notCompleteTodoElm);
    }
}
import { completeTodoComponent } from "../component/CompleteTodoComponent";
import { completeTodoItemComponent } from "../component/CompleteTodoItemComponent";
import { NotCompleteTodoController } from "./NotCompleteTodoController";

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
        this.setRoobackTodoButtonClickEvent();
    }

    /** @description 戻るボタンの処理 */
    private setRoobackTodoButtonClickEvent() {
        const rollbackBtn = document.getElementById('js-complete-todo-list')?.lastElementChild?.querySelector('#js-rollback-todo-btn');
        rollbackBtn?.addEventListener('click', (event) => {
            const eventTargetElm = event.target;
            if(eventTargetElm instanceof HTMLElement) {
                const todo = eventTargetElm.parentElement?.previousElementSibling?.textContent || '';
                new NotCompleteTodoController().addTodo(todo);
                eventTargetElm.parentElement?.parentElement?.remove();
            }
        });
    }
}
import { notCompleteTodoComponent } from "../component/NotCompleteTodoComponent";
import { notCompleteTodoItemComponent } from "../component/NotCompleteTodoItem";
import { CompleteTodoController } from "./CompleteTodoController";

export class NotCompleteTodoController {
    /** @description 未完了のTODOコンポーネントの表示 */
    initialize(rootElement: HTMLElement) {
        const notCompleteTodoElm = notCompleteTodoComponent();
        rootElement.insertAdjacentHTML('beforeend', notCompleteTodoElm);
    }

    /** @description 未完了TODOを追加する */
    addTodo(todo: string) {
        const notCompleteTodoElm = notCompleteTodoItemComponent(todo);
        const notCompleteTodoList = document.getElementById('js-not-complete-todo-list');
        if(!(notCompleteTodoList instanceof HTMLElement)) {
            console.error('未完了TODOの追加に失敗しました');
            alert('未完了TODOの追加に失敗しました');
            return;
        }
        notCompleteTodoList.insertAdjacentHTML('beforeend', notCompleteTodoElm);
        this.setRemoveTodoButtonClickEvent();
        this.setCompleteTodoButtonClickEvent();
    }

    /** @description 削除ボタン処理 */
    private setRemoveTodoButtonClickEvent() {
        const deleteBtn = document.getElementById('js-not-complete-todo-list')?.lastElementChild?.querySelector('#js-delete-todo-btn');
        deleteBtn?.addEventListener('click', (event) => {
            const eventTargetElm = event.target;
            if(eventTargetElm instanceof HTMLElement) {
                const deleteTodoElm = eventTargetElm.parentElement?.parentElement;
                deleteTodoElm?.remove();
            }
        });
    }

    /** @description 完了ボタン処理 */
    private setCompleteTodoButtonClickEvent() {
        const completeBtn = document.getElementById('js-not-complete-todo-list')?.lastElementChild?.querySelector('#js-complete-todo-btn');
        completeBtn?.addEventListener('click', (event) => {
            const eventTargetElm = event.target;
            if(eventTargetElm instanceof HTMLElement) {
                const todo = eventTargetElm.parentElement?.previousElementSibling?.textContent || '';
                new CompleteTodoController().addTodo(todo);
                eventTargetElm.parentElement?.parentElement?.remove();
            }
        })
    }
}
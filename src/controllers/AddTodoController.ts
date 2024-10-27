import { addTodoComponent } from "../component/AddTodoComponent";
import { InputValidator } from "../validators/inputValidator";
import { NotCompleteTodoController } from "./NotCompleteTodoController";

export class AddTodoController {
    /** @description TODO追加フォームコンポーネントの表示 */
    initialize(rootElement: HTMLElement) {
        const addTodoElm = addTodoComponent();
        rootElement.insertAdjacentHTML('beforeend', addTodoElm);
        this.setAddTodoButtonClickEvent();
    }

    /** @description TODO追加ボタン処理 */
    private setAddTodoButtonClickEvent() {
        const addTodoButton = document.getElementById('js-add-todo-btn');
        addTodoButton?.addEventListener('click', () => {
            const inputElm = document.getElementById('js-add-todo-input');
            if(!(inputElm instanceof HTMLInputElement)) {
                console.error('入力フォームの取得に失敗しました');
                alert('入力フォームの取得に失敗しました');
                return;
            }

            const inputTodo = inputElm.value;
            try {
                new InputValidator().validateTodo(inputTodo);
                new NotCompleteTodoController().addTodo(inputTodo);
                inputElm.value = '';
            } catch(e: any) {
                console.error(e);
                alert(e.message);
            }
        })
    }
}
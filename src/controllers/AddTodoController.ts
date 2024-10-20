import { addTodoComponent } from "../component/AddTodoComponent";
import { NotCompleteTodoController } from "./NotCompleteTodoController";

export class AddTodoController {
    initialize(rootElement: HTMLElement) {
        const addTodoElm = addTodoComponent();
        rootElement.insertAdjacentHTML('beforeend', addTodoElm);
        this.setAddTodoButtonClickEvent();
    }

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
                this.validation(inputTodo);
                new NotCompleteTodoController().addTodo(inputTodo);
                inputElm.value = '';
            } catch(e: any) {
                console.error(e);
                alert(e.message ?? '予期しないエラーが発せしました');
            }
        })
    }

    private validation(todo: string) {
        if(!todo) {
            throw new Error('todoを入力してください');
        }
    }
}
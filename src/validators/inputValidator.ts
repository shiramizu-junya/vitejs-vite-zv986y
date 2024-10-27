export class InputValidator {
    /** @description TODOのバリデーションチェックをする */
    validateTodo(todo: string) {
        if(!todo) {
            throw new Error('todoを入力してください');
        }
    }
}
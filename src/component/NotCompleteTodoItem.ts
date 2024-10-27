export const notCompleteTodoItemComponent = (todo: string) => {
    return `
        <li class="task-item">
            <p class="task-text">${todo}</p>
            <div class="task-buttons">
            <button class="btn btn-complete" id="js-complete-todo-btn">完了</button>
            <button class="btn btn-delete" id="js-delete-todo-btn">削除</button>
            </div>
        </li>
    `
}
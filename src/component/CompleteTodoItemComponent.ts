export const completeTodoItemComponent = (todo: string) => {
    return `
        <li class="task-item">
            <p class="task-text">${todo}</p>
            <div class="task-buttons">
                <button class="btn btn-rollback" id="js-rollback-todo-btn">戻る</button>
            </div>
        </li>
    `
}
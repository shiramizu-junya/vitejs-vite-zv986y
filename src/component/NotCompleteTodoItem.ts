export const notCompleteTodoItemComponent = (value: string) => {
    return `
        <li class="task-item">
            <p class="task-text">${value}</p>
            <div class="task-buttons">
            <button class="btn btn-complete">完了</button>
            <button class="btn btn-delete">削除</button>
            </div>
        </li>
    `
}
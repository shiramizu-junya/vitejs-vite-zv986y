export const notCompleteTodoComponent = () => {
  return `
    <!-- 未完了のTODOコンポーネント -->
    <div class="todo-container not-complete-todo-container">
      <h2>未完了のTODO</h2>
      <ul class="task-list">
        <li class="task-item">
          <p class="task-text">タスク１</p>
          <div class="task-buttons">
            <button class="btn btn-complete">完了</button>
            <button class="btn btn-delete">削除</button>
          </div>
        </li>
        <li class="task-item">
          <p class="task-text">タスク１</p>
          <div class="task-buttons">
            <button class="btn btn-complete">完了</button>
            <button class="btn btn-delete">削除</button>
          </div>
        </li>
        <li class="task-item">
          <p class="task-text">タスク１</p>
          <div class="task-buttons">
            <button class="btn btn-complete">完了</button>
            <button class="btn btn-delete">削除</button>
          </div>
        </li>
      </ul>
    </div>
  `;
};

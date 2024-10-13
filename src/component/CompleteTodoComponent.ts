export const completeTodoComponent = () => {
  return `
    <!-- 完了のTODOコンポーネント -->
    <div class="todo-container complete-todo-container">
        <h2>完了のTODO</h2>
        <ul class="task-list">
          <li class="task-item">
            <p class="task-text">タスク１</p>
            <div class="task-buttons">
              <button class="btn btn-rollback">戻る</button>
            </div>
          </li>
          <li class="task-item">
            <p class="task-text">タスク１</p>
            <div class="task-buttons">
              <button class="btn btn-rollback">戻る</button>
            </div>
          </li>
          <li class="task-item">
            <p class="task-text">タスク１</p>
            <div class="task-buttons">
              <button class="btn btn-rollback">戻る</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `;
};

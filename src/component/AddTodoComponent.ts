export const addTodoComponent = () => {
  return `
    <!-- TODOを追加するコンポーネント -->
    <div class="add-todo-container">
      <input
        type="text"
        name="todo"
        placeholder="TODOを入力"
        class="add-todo-input"
        id="js-add-todo-input"
      />
      <button class="btn btn-add" id="js-add-todo-btn">追加</button>
    </div>
  `;
};

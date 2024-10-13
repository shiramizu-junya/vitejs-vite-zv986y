import { addTodoComponent } from './component/AddTodoComponent.ts';
import { notCompleteTodoComponent } from './component/NotCompleteTodoComponent.ts';
import { completeTodoComponent } from './component/CompleteTodoComponent.ts';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('app')!;

  const addTodoElm = addTodoComponent();
  const notCompleteTodoElm = notCompleteTodoComponent();
  const completeTodoElm = completeTodoComponent();

  rootElement.insertAdjacentHTML('beforeend', addTodoElm);
  rootElement.insertAdjacentHTML('beforeend', notCompleteTodoElm);
  rootElement.insertAdjacentHTML('beforeend', completeTodoElm);
});

import { AddTodoController } from './controllers/AddTodoController.ts';
import { CompleteTodoController } from './controllers/CompleteTodoController.ts';
import { NotCompleteTodoController } from './controllers/NotCompleteTodoController.ts';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('app')!;
  new AddTodoController().initialize(rootElement);
  new NotCompleteTodoController().initialize(rootElement);
  new CompleteTodoController().initialize(rootElement);
});

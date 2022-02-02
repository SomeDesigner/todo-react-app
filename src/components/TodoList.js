import { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    // some regex magic
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
  }
  return (
    <div>
      <h1>Todos</h1>
      <TodoForm />
    </div>
  );
}

export default TodoList;

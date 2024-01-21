import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteTodo, onToggleTodoStatus }) => (
  <div>
    <h1>{todos.some(todo => todo.isDone) ? 'Done..✔️' : 'Working..🔥'}</h1>
    <div className='contents'>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodoStatus={onToggleTodoStatus}
        />
      ))}
    </div>
  </div>
);

export default TodoList;
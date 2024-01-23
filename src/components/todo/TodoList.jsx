import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteTodo, onToggleTodoStatus, title }) => (
  <div>
    <h1>{title}</h1>
    <div className='contents'>
      {todos.length > 0 ? (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodoStatus={onToggleTodoStatus}
          />
        ))
      ) : (
        <p></p>
      )}
    </div>
  </div>
);

export default TodoList;
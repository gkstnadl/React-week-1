import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/todo/TodoInput.js';
import TodoList from './components/todo/TodoList.js';

function App() {

  // useState 훅 사용해서 입력되는 상태 (렌더링되는) 선언해두기
  const [todos, setTodos] = useState([]); // Todo 상태

  // '추가하기' 버튼 클릭 처리
  const handleAddTodo = (title, content) => {
    setTodos([...todos, { id: Date.now(), title, content, isDone: false }]);
  };

  // '삭제하기' 버튼 클릭 처리 (공통)
  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  // '완료' 또는 '취소' 상태 토글
  const toggleTodoStatus = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='body'>
      <div className='main-title'>
        <span className='title-todo'>My Todo List</span><span>React_4기</span>
      </div>
      <TodoInput onAddTodo={handleAddTodo} />
      <div className='working-done'>
      <TodoList 
        todos={todos.filter(todo => !todo.isDone)} 
        onDeleteTodo={handleDeleteTodo} 
        onToggleTodoStatus={toggleTodoStatus} 
        title="Working..🔥" 
      />
      <TodoList 
        todos={todos.filter(todo => todo.isDone)} 
        onDeleteTodo={handleDeleteTodo} 
        onToggleTodoStatus={toggleTodoStatus} 
        title="Done..✔️" 
      />
      </div>
    </div>
  );
}

export default App;

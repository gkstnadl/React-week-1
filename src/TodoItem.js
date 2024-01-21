import React from 'react';

// Todo 및 Done 항목 렌더링을 위한 컴포넌트
const TodoItem = ({ todo, onDeleteTodo, onToggleTodoStatus }) => (
    <div className='content'>
        <h2 className={todo.isDone ? '' : 'inputTitle'}>{todo.title}</h2>
        <p className={todo.isDone ? '' : 'inputMainText'}>{todo.content}</p>
        <div className='buttons'>
            <button className='deleteBtn' onClick={() => onDeleteTodo(todo.id)}>삭제하기</button>
            <button className={todo.isDone ? 'cancelBtn' : 'doneBtn'} onClick={() => onToggleTodoStatus(todo.id)}>
                {todo.isDone ? '취소' : '완료'}
            </button>
        </div>
    </div>
);

export default TodoItem;
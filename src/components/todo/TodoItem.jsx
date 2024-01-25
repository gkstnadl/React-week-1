
import React from 'react';

// Todo 및 Done 항목 렌더링을 위한 컴포넌트
const TodoItem = ({ todo, onDeleteTodo, onToggleTodoStatus }) => {

    const handleDelete = () => {
        if (window.confirm('해당 항목을 삭제하시겠습니까?')) {
            onDeleteTodo(todo.id);
        }
    };

    const handleStatusToggle = () => {
        const action = todo.isDone ? '취소' : '완료';
        if (window.confirm(`이 항목을 ${action}하시겠습니까?`)) {
            onToggleTodoStatus(todo.id);
        }
    };

    return (
        <div className='content'>
            <h2 className={'input-title'}>{todo.title}</h2>
            <p className={'input-main-text'}>{todo.content}</p>
            <div className='buttons'>
                <button className='delete-btn' onClick={handleDelete}>삭제하기</button>
                <button className={todo.isDone ? 'cancel-btn' : 'done-btn'} onClick={handleStatusToggle}>
                    {todo.isDone ? '취소' : '완료'}
                </button>
            </div>
        </div>
    );
};

export default TodoItem;

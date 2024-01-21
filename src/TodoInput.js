import React, { useState } from 'react';

// useState 훅 사용해서 입력되는 상태 (렌더링되는) 선언해두기
const TodoInput = ({ onAddTodo }) => {

    const [title, setTitle] = useState(''); // 제목 상태
    const [content, setContent] = useState(''); // 내용 상태

    // 제목 입력을 제어하는 핸들
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    // 내용 입력을 제어하는 핸들
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    // 추가 버튼을 제어하는 핸들. 제목이랑 내용 추가하고, 입력값은 초기화
    const handleAddTodoClick = () => {
        onAddTodo(title, content);
        setTitle('');
        setContent('');
      };

    return (
        <div className='inputStyle'>
            <div>
                <div>
                    <span>제목</span> <input value={title} onChange={handleTitleChange} />
                    <span>내용</span> <input value={content} onChange={handleContentChange} />
                </div>
            </div>
            <button onClick={handleAddTodoClick}>추가하기</button>
        </div>
    );
};

export default TodoInput;
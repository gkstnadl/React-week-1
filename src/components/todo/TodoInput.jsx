import React, { useState } from 'react';

// useState 훅 사용해서 입력되는 상태 (렌더링되는) 선언해두기
const TodoInput = ({ onAddTodo }) => {

    // 제목과 내용의 상태(입력값)을 한번에 관리
    const [inputs, setInputs] = useState({
        title: '',
        content: ''
    });

    // 입력값을 제어하는 핸들
    const handleInput = (e) => {
        const { name, value } = e.target; // input의 name과 value 추출
        setInputs({
            ...inputs,
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };

    // 추가 버튼을 제어하는 핸들. 제목이랑 내용 추가하고, 입력값은 초기화
    const handleAddTodoClick = (e) => {
        e.preventDefault();
        const { title, content } = inputs;
        // 유효성 검사
        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }

        onAddTodo(inputs.title, inputs.content);
        setInputs({ title: '', content: '' });
    };

    return (
        <form className='input-style' onSubmit={handleAddTodoClick}>
            <div>
                <div>
                    <label>제목</label> <input name="title" value={inputs.title} onChange={handleInput} />
                    <label>내용</label> <input name="content" value={inputs.content} onChange={handleInput} />
                </div>
            </div>
            <button onClick={handleAddTodoClick}>추가하기</button>
        </form>
    );
};

export default TodoInput;
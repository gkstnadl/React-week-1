# 리액트 입문 1주차 과제
TodoList 만들기

## 기능 설명
- 제목과 내용을 입력하면 입력한 내용이 카드형식으로 Working 부분에 렌더링 되기
- 삭제하기 기능 (Working과 Done의 삭제하기 둘 다 동일 기능으로, 동일 함수로 사용)
- 완료 기능 (Working상태에서 완료 버튼을 누르면 Done버튼으로 이동됨과 동시에 취소 버튼으로 바뀌도록 하기)
- 취소 기능 (다시 Working 자리로 찾아가기)
- JS파일을 기능별로 분리하기
  1) TodoInput - 할 일을 추가하는 입력 관련 기능
  2) TodoItem - 할 일을 html로 보여주는 것과 '삭제하기' '완료' '취소' 버튼에 onClick 넣어둠
  3) TodoList - isDone 상태에 따라 할 일을 어디에 나열할지. 할일의 전체 리스트에 관여하는 부분.


![image](https://github.com/gkstnadl/React-week-1/assets/131341172/3b744740-27cd-4f73-ac7a-9fd006367b8c)
- main화면
  
![image](https://github.com/gkstnadl/React-week-1/assets/131341172/c15d288b-a400-409f-8808-1c578b7841bf)
- Todo추가한 화면
  
![image](https://github.com/gkstnadl/React-week-1/assets/131341172/0c37cdb2-f161-4c94-9c66-17948390944f)
- Todo의 완료버튼을 누른 화면
  

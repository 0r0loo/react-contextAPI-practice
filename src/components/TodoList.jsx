import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const state = useTodoState();
  console.log(state);
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" />
      <TodoItem text="컴포넌트 스타일링하기" done={true} />
      <TodoItem text="Context 만들기" />
      <TodoItem text="기능구현하기" />
    </TodoListBlock>
  );
}

export default TodoList;

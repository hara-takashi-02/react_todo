/**
 * ----------
 * 編集ボタン
 * ----------
 */
import React from "react"
import { Todo } from "../types/todo"
import styled from "styled-components"

interface ButtonEditProps {
  item: Todo
  editTodo: (id: number) => void
}

const ButtonEdit = styled.button<{ $item: Todo }>`
position: absolute;
transition: all.3s ease;
top: 0;
left: 0;
transform: translate(0, 0);
z-index: 1;
width: 4rem;
height: 4rem;
border-radius: .5rem;

&::before{
display: block;
transition: all.3s ease;
background-color: ${({ theme }) => theme.colors.edit};
opacity: ${({ $item }) => ($item.isEdit ? 1 : 0.3)};
content: "";
width: 2rem;
height: 2rem;
border-radius: 50%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: absolute;
}`

const ButtonEditPage: React.FC<ButtonEditProps> = ({ item, editTodo }) => {
  return (
    <ButtonEdit
      $item={item}
      onClick={() => editTodo(item.id)}
    ></ButtonEdit>
  )
}

export default ButtonEditPage
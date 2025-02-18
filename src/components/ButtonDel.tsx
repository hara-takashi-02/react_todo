/**
 * ----------
 * 削除ボタン
 * ----------
 */
import React from "react"
import { Todo } from "../types/todo"
import styled from "styled-components"

interface ButtonDelProps {
  item: Todo
  delTodo: (id: number) => void
}

const ButtonDel = styled.button<{ $item: Todo }>`
position: absolute;
display: ${({ $item }) => ($item.status == 1 ? 'block' : 'none')};
transition: all.3s ease;
top: 0;
right: 0;
transform: translate(0, 0);
z-index: 1;
width: 4rem;
height: 4rem;
border-radius: .5rem;

&::before,
&::after{
content: "";
display: block;
transition: all.3s ease;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: absolute;
}

&::before{
background-color: ${({ theme }) => theme.colors.textHidden};
width: 2rem;
height: 2rem;
border-radius: 50%;
}

&::after{
  background-color: ${({ theme }) => (theme.colors.base)};
  width: 1rem;
  height: 2px;
}
`

const ButtonDelPage: React.FC<ButtonDelProps> = ({ item, delTodo }) => {
  return (
    <ButtonDel
      $item={item}
      onClick={() => delTodo(item.id)}
    ></ButtonDel>
  )
}

export default ButtonDelPage
/**
 * ----------
 * チェックボタン
 * ----------
 */
import React from "react"
import { Todo } from "../types/todo"
import styled from "styled-components"

interface ButtonCheckProps {
  item: Todo
  clickItem: (id: number) => void
}

const Check = styled.button`
transition: all.3s ease;
width: 4rem;
height: 4rem;
border-radius: .5rem;
position: relative;
background-color: ${({ theme }) => theme.colors.title};
border-radius: .5rem;
margin-right: 2rem;

&::before{
display: block;
transition: all.3s ease;
background-color: ${({ theme }) => theme.colors.text};
content: "";
width: 2rem;
height: 2rem;
border-radius: 50%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: absolute;
}
&::after{
background-color: transparent;
content: "";
width: 1rem;
height: 1rem;
border-radius: 50%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: absolute;
}

&.is-hidden{
opacity: 0;
visibility: hidden;
}

&.is-checked{
&::after{
  background-color: ${({ theme }) => theme.colors.add};
}
}
`

const ButtonCheckPage: React.FC<ButtonCheckProps> = ({item, clickItem}) => {
  return (
    <Check
    className={`${item.isEdit ? "is-hidden" : ""} ${item.status == 1 ? "is-checked" : ""}`}
    onClick={() => clickItem(item.id)}
  ></Check>
  )
}

export default ButtonCheckPage
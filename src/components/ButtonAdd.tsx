/**
 * ----------
 * 追加ボタン
 * ----------
 */
import React from "react"
import styled from "styled-components"

interface ButtonAddPageProps {
  onClick: () => void
  isOn: boolean
}

const ButtonAdd = styled.button<{ $isOn: boolean }>`
background-color: ${({ theme, $isOn }) =>
      $isOn ? theme.colors.text : theme.colors.title};
position: absolute;
transition: all.3s ease;
top: 50%;
left: 0;
transform: translate(0, -50%);
z-index: 1;
width: 4rem;
height: 4rem;
border-radius: .5rem;

&::before{
display: block;
transition: all.3s ease;
background-color: ${({ theme, $isOn }) =>
      $isOn ? theme.colors.add : theme.colors.btn};
content: "";
width: 2rem;
height: 2rem;
border-radius: 50%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: absolute;
}
`

const ButtonAddPage: React.FC<ButtonAddPageProps> = ({ onClick, isOn }) => {
  return (
    <ButtonAdd onClick={onClick} $isOn={isOn}></ButtonAdd>
  )
}

export default ButtonAddPage
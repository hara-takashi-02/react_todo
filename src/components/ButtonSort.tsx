/**
 * ----------
 * チェックボタン
 * ----------
 */
import React from "react"
import styled from "styled-components"

interface ButtonSortProps {
  listeners: React.HTMLAttributes<HTMLElement> | undefined
}

const ButtonSort = styled.button`
  cursor: grab;
  background: none;
  border: none;
  font-size: 1.6rem;
  width: 4rem;
  height: 4rem;
`

const ButtonSortPage: React.FC<ButtonSortProps> = ({listeners}) => {
  return (
    <ButtonSort {...listeners}>☰</ButtonSort>
  )
}

export default ButtonSortPage
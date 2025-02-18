/**
 * ----------
 * 追加フォーム
 * ----------
 */
import React, { useRef } from "react"
import styled from "styled-components"

interface InputTextPageProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  isOn: boolean
  onFocusRequest: (focusFn: () => void) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const InputText = styled.input<{ $isOn: boolean }>`
position: relative;
transition: all.3s ease;
color: ${({ theme }) => theme.colors.base};
background-color: ${({ theme, $isOn }) =>
      $isOn ? theme.colors.text : theme.colors.title};
padding-left: ${({ $isOn }) =>
      $isOn ? '4rem' : 0};
border-radius: .5rem;
width: 100%;
height: 100%;
`

const InputTextPage: React.FC<InputTextPageProps> = ({ onChange, value, isOn, onFocusRequest, onKeyDown }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  if (onFocusRequest) {
    onFocusRequest(focusInput)
  }

  return (
    <InputText ref={inputRef} type="text" onChange={onChange} value={value} $isOn={isOn} onKeyDown={onKeyDown} />
  )
}

export default InputTextPage
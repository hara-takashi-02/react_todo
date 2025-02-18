/**
 * ----------
 * textarea
 * ----------
 */
import React, { useRef, useEffect } from "react"
import { Todo } from "../types/todo"
import styled from "styled-components"

interface InputTextAreaProps {
  item: Todo
  onChangeItem: (id:number ,e: string) => void
}

const InputTextArea = styled.textarea<{ $item: Todo }>`
line-height: 1.6;
display: ${({ $item }) => ($item.isEdit ? 'block' : 'none')};
border-radius: ${({ $item }) => ($item ? '.5rem' : 0)};
resize: none;
width: 100%;
field-sizing: content;
&:focus,&:focus-visible{
  outline: none;
}
`

const InputTextAreaPage: React.FC<InputTextAreaProps> = ({ item, onChangeItem }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  /**
   * ----------
   * テキストエリア最後部をフォーカス
   * ----------
   */
  useEffect(() => {
    if (item.isEdit && textareaRef.current) {
      textareaRef.current.focus()
      const length = textareaRef.current.value.length
      textareaRef.current.setSelectionRange(length, length)
    }
  }, [item.isEdit])

  return (
    <InputTextArea
      $item={item}
      ref={textareaRef}
      value={item.text}
      onChange={(e) => onChangeItem(item.id, e.target.value)}
    />
  )
}

export default InputTextAreaPage
/**
 * ----------
 * アイテム
 * ----------
 */
import React, { useRef, useEffect, useState } from "react"
import { useSortable } from "@dnd-kit/sortable";
import ButtonCheck from "../components/ButtonCheck"
import ButtonEdit from "../components/ButtonEdit"
import ButtonDel from "../components/ButtonDel"
import ButtonSort from "../components/ButtonSort"
import InputTextArea from "../components/InputTextArea"
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components"
import { Todo } from "../types/todo"

interface TodoItemPageProps {
  item: Todo
  editTodo: (id: number) => void
  delTodo: (id: number) => void
  clickItem: (id: number) => void
  onChangeItem: (id: number, value: string) => void
}

const TodoItemWrapper = styled.div`
transition: .3s;

&.fadeIn {
opacity: 0;
transform: translate(-1rem, 0);
}
&.fadeEnd {
  opacity: 1;
  transform: translate(0, 0);
}
`

const TodoItem = styled.div`
margin-top: 2rem;
display: flex;
align-items: flex-start;
`

const TodoItemInner = styled.div<{ $item: Todo }>`
display: flex;
align-items: center;
position: relative;
transition: all .3s ease;
color: ${({ theme }) => theme.colors.text};
background-color: ${({ $item, theme }) => ($item.fade ? theme.colors.title : theme.colors.text)};
border-radius: .5rem;
width: calc(100% - 8rem);
padding: 1rem;
padding-left: 4rem;

p{
  //padding: .8rem;
  line-height: 1.6;
  white-space: pre-wrap;
  width: 100%;
  cursor: text;
}

&.is-active{
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.base};
  p{
    display: none;
  }
}

&.is-checked{
  p{
    color: #646464;
  }
}
`

const TodoItemPage: React.FC<TodoItemPageProps> = ({ item, clickItem, editTodo, delTodo, onChangeItem }) => {
  const [anime, setAnime] = useState('fadeIn')

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // dnd-kit
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
  })
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  }

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

  /**
   * ----------
   * フェード
   * ----------
   */
  useEffect(() => {
    if (item.fade) {
      const timer = setTimeout(() => {
        setAnime('fadeEnd')
      }, 100)

      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setAnime('fadeIn')
      }, 100)

      return () => clearTimeout(timer)
    }

  }, [item.fade])

  return (
    <TodoItemWrapper className={anime}>
      <TodoItem
        ref={setNodeRef}
        style={style}
        {...attributes}
      >

        <ButtonCheck
          item={item}
          clickItem={clickItem}
        />

        <TodoItemInner
          $item={item}
          className={
            `${item.isEdit ? "is-active" : ""} 
            ${item.status == 1 ? "is-checked" : ""}`
          }
        >
          <ButtonEdit
            item={item}
            editTodo={editTodo}
          />
          <p
            onClick={() => editTodo(item.id)}
          >{item.text}</p>
          <InputTextArea
            item={item}
            onChangeItem={onChangeItem}
          />
          <ButtonDel
            item={item}
            delTodo={delTodo}
          />

        </TodoItemInner>

        <ButtonSort listeners={listeners} />

      </TodoItem>
    </TodoItemWrapper>
  )
}

export default TodoItemPage
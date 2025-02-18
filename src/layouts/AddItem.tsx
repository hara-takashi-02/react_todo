/**
 * ----------
 * 追加アイテム
 * ----------
 */
import React from "react"
import styled from "styled-components"

const AddItem = styled.div`
  position: relative;
display: block;
min-height: 4rem;
width: 4rem;
max-width: 4rem;
margin-top: 2rem;
transition: .3s ease;

button{
background-color: ${({ theme }) => theme.colors.title};
position: absolute;
transition: all.3s ease;
top: 0;
left: 0;
transform: translate(0, 0);
z-index: 1;
width: 4rem;
min-height: 4rem;
border-radius: .5rem;

&::before{
display: block;
transition: all.3s ease;
background-color: ${({ theme }) => theme.colors.add};
opacity: .5;
content: "";
width: 2rem;
height: 2rem;
border-radius: 50%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: absolute;
}
}

input,textarea{
resize: none;
position: relative;
transition: all.3s ease;
color: ${({ theme }) => theme.colors.base};
background-color: ${({ theme }) => theme.colors.title};
padding: .8rem;
padding-left: 0;
border-radius: .5rem;
width: 100%;
min-height: 4rem;
field-sizing: content;
}

&.is-active{
  width: 100%;
max-width: 40rem;
  button{
    background-color: ${({ theme }) => theme.colors.text};
    &::before{
      opacity: 1;
    }
  }

  input,textarea{
    padding-left: 4rem;
    background-color: ${({ theme }) => theme.colors.text};
  }
}
`

interface TodoItemPageProps {
  isAdd: boolean
  inputRef: React.RefObject<HTMLTextAreaElement>
  btnAddRef: React.RefObject<HTMLButtonElement>
  newTodo: string
  onChangeAdd: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  addTodo: () => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

const AddItemPage: React.FC<TodoItemPageProps> = ({
  isAdd,
  inputRef,
  btnAddRef,
  newTodo,
  onChangeAdd,
  addTodo,
  onKeyDown
}) => {

  return (
    <AddItem className={isAdd ? "is-active" : ""}>
      <button
        ref={btnAddRef}
        onClick={addTodo}
      ></button>
      <textarea
        ref={inputRef}
        onChange={onChangeAdd}
        value={newTodo || ""}
        onKeyDown={onKeyDown}
      >
        {newTodo}
      </textarea>
    </AddItem>
  )
}

export default AddItemPage
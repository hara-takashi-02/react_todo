import React from "react"
import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import style from "../pages/Home.module.scss"
//import DebugTodos from "../features/DebugTodos"
import TitlePage from "../components/TitlePage"
import AddItem from "../layouts/AddItem"
import TodoItem from "../layouts/TodoItem"
import iconShop from '../assets/images/icon_shop.png'
import styled from "styled-components"
import { useTodo } from "../hooks/useTodo"

const TodoItems = styled.div`
width: 100%;
max-width: 800px;
margin-left: auto;
`
const Home: React.FC = () => {
  /**
   * ----------
   * 変数
   * ----------
   */
  const {
    isAdd,
    newTodo,
    todos,
    inputRef,
    btnAddRef,
    addTodo,
    onKeyDown,
    onChangeAdd,
    editTodo,
    onChangeItem,
    delTodo,
    clickItem,
    handleDragEnd,
  } = useTodo()

  const TitlePageText = '買うものリスト'

  // チェック済みのTodoItemを取得
  const checkedTodos = todos.filter((todo) => todo.status == 1)
  const noCheckedTodos = todos.filter((todo) => todo.status == 0)

  return (
    <div className={style.home}>
      {/** <DebugTodos /> */}

      <TitlePage
        title={TitlePageText}
        icon={iconShop}
      />

      <AddItem
        isAdd={isAdd}
        inputRef={inputRef}
        btnAddRef={btnAddRef}
        newTodo={newTodo}
        onChangeAdd={onChangeAdd}
        addTodo={addTodo}
        onKeyDown={onKeyDown}
      />

      {/** 未チェック */}
      <TodoItems>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext
            items={noCheckedTodos.map((todo) => todo.id)}
            strategy={verticalListSortingStrategy}
          >
            {noCheckedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                item={todo}
                delTodo={delTodo}
                editTodo={editTodo}
                clickItem={clickItem}
                onChangeItem={(id, value) => onChangeItem(id, { target: { value } } as React.ChangeEvent<HTMLTextAreaElement>)}
              />
            ))}
          </SortableContext>
        </DndContext>
      </TodoItems>


      <br />
      {/** チェック */}
      <TodoItems>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext
            items={checkedTodos.map((todo) => todo.id)}
            strategy={verticalListSortingStrategy}
          >
            {checkedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                item={todo}
                editTodo={editTodo}
                delTodo={delTodo}
                clickItem={clickItem}
                onChangeItem={(id, value) => onChangeItem(id, { target: { value } } as React.ChangeEvent<HTMLTextAreaElement>)}
              />
            ))}
          </SortableContext>
        </DndContext>
      </TodoItems>
    </div>
  )
}

export default Home
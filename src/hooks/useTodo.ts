import { useRef, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addItem, updateItem, updateItemsOrder } from '../features/itemSlice'
import { Todo } from "../types/todo"
import { arrayMove } from '@dnd-kit/sortable'
import { DragEndEvent } from '@dnd-kit/core'

export const useTodo = () => {
  // store変数取得
  const storeTodos = useAppSelector((state) => state.items.items)
  // store関数取得
  const dispatch = useAppDispatch()

  const [isAdd, setisAdd] = useState<boolean>(false)
  const [newTodo, setNewTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const btnAddRef = useRef<HTMLButtonElement>(null)
  const refs = useRef<Record<number, HTMLTextAreaElement | null>>({})

  /**
   * ----------
   * storeTodos更新時
   * ----------
   */
  useEffect(() => {
    // storeをhookに値渡し
    if (storeTodos.length > 0) {
      setTodos([...storeTodos])
    }
    // storeTodosが変わるたびに実行
  }, [storeTodos])

  /**
   * ----------
   * ドラッグ
   * ----------
   */
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over?.id) {
      setTodos((prevTodos) => {
        const oldIndex = prevTodos.findIndex((todo) => todo.id === active.id)
        const newIndex = prevTodos.findIndex((todo) => todo.id === over?.id)
        // 並び替え
        const moved = arrayMove(prevTodos, oldIndex, newIndex)

        // orderアップデート
        const updatedMoved = moved.map((e, index) => {
          return { ...e, order: index }
        })

        dispatch(updateItemsOrder(updatedMoved))

        return updatedMoved
      })
    }
  }

  /**
   * ----------
   * 追加
   * ----------
   */
  const addTodo = async () => {
    setisAdd((prevState) => !prevState)

    if (isAdd) {
      // 追加(空白は除外(trim))
      console.log('result')

      /*if (newTodo.trim())
          setTodos((prevTodos) => [
            ...prevTodos,
            {
              id: Date.now(),
              text: newTodo,
              isEdit: false,
              order: 999,
            },
          ])*/

      // 空白は除外(trim)
      if (newTodo.trim())
        dispatch(
          addItem({
            id: Date.now(),
            text: newTodo,
            isEdit: false,
            order: 999,
            status: 0,
            fade: true,
          })
        )

      setNewTodo('')

      if (inputRef.current) {
        inputRef.current.blur()
      }
      if (btnAddRef.current) {
        //btnAddRef.current.focus()
      }
    } else {
      console.log('add')
      if (inputRef.current?.focus) {
        inputRef.current.focus()
      }
    }
  }

  /**
   * ----------
   * enterで追加
   * ----------
   */
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      //if (isAdd) addTodo()
    }
  }

  /**
   * ----------
   * 追加内容
   * ----------
   */
  const onChangeAdd = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodo(e.target.value)
  }

  /**
   * ----------
   * 編集確定
   * ----------
   */
  const editTodo = (id: number) => {
    const editItem = todos.filter((item) => item.id === id)[0]
    const oldItem = todos.filter((item) => item.isEdit === true)

    // 編集モードなら編集反映
    if (editItem.isEdit) {
      dispatch(
        updateItem({
          item: {
            id: id,
            text: editItem.text,
          },
        })
      )
    }

    // 編集モード初期化と保存
    if (oldItem.length) {
      /*setTodos((prevTodos) =>
          prevTodos.map((todo) => todo.isEdit == true ? { ...todo, isEdit: false } : todo))*/
      dispatch(
        updateItem({
          item: {
            id: oldItem[0].id,
            text: oldItem[0].text,
            isEdit: false,
          },
        })
      )
    }

    // 編集モード切り替え
    /*setTodos((prevTodos) =>
        prevTodos.map((todo) => todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo))*/
    dispatch(
      updateItem({
        item: {
          id: id,
          isEdit: !editItem.isEdit,
        },
      })
    )

    setTimeout(() => {
      // 自動フォーカス
      const textarea = refs.current[id]
      textarea?.focus()
      if (textarea) {
        const length = textarea.value.length
        textarea.setSelectionRange(length, length)
      }
    }, 0)
  }

  /**
   * ----------
   * 編集
   * ----------
   */
  const onChangeItem = (id: number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: e.target.value } : todo)))
  }

  /**
   * ----------
   * 削除
   * ----------
   */
  const delTodo = (id: number) => {
    //setTodos(todos.filter((item) => item.id !== id))

    dispatch(
      updateItem({
        item: {
          id: id,
          fade: false,
        },
      })
    )
    setTimeout(() => {
      dispatch(
        updateItem({
          item: {
            id: id,
            status: 2,
          },
        })
      )
    }, 500)
  }

  /**
   * ----------
   * チェック
   * ----------
   */
  const clickItem = async (id: number) => {
    const editItem = todos.filter((item) => item.id === id)[0]

    /*setTodos((prevTodos) =>
        prevTodos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
      )*/

    dispatch(
      updateItem({
        item: {
          id: id,
          fade: false,
        },
      })
    )
    await delay(300)
    dispatch(
      updateItem({
        item: {
          id: id,
          status: editItem.status == 0 ? 1 : 0,
        },
      })
    )
    dispatch(
      updateItem({
        item: {
          id: id,
          fade: true,
        },
      })
    )
  }

  /**
   * ----------
   * 待機関数
   * ----------
   */
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  return {
    isAdd,
    newTodo,
    todos,
    inputRef,
    btnAddRef,
    setNewTodo,
    addTodo,
    onKeyDown,
    onChangeAdd,
    editTodo,
    onChangeItem,
    delTodo,
    clickItem,
    handleDragEnd,
    refs,
  }
}

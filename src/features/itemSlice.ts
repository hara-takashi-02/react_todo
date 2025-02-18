import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo } from "../types/todo"

// 型の定義
type Item = Todo
interface ItemState {
  items: Item[]
}

// 初期状態
const initialState: ItemState = {
  items: [
    {
      id: 1,
      text: "アイテム1",
      isEdit: false,
      order: 0,
      status: 0,
      fade: true,
    },
    {
      id: 2,
      text: "アイテム2",
      isEdit: false,
      order: 0,
      status: 0,
      fade: true,
    },
  ],
}

// スライスの作成
const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {

    // 追加
    addItem: (state, action: PayloadAction<Item>) => {
      //state.items.push(action.payload)
      state.items = [...state.items, action.payload]
    },

    // 単品更新
    updateItem: (state, action: PayloadAction<{ item: Partial<Item> }>) => {
      const {item} = action.payload
      state.items = state.items.map((todo) =>
        todo.id === item.id ? { ...todo, ...item } : todo
      )
    },

    // 並び替え
    updateItemsOrder: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload
    },

    // 削除
    removeItem: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    },
  },
});

export const { addItem, updateItem, updateItemsOrder, removeItem } = itemSlice.actions;
export default itemSlice.reducer;

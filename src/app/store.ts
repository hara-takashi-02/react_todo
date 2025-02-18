import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counterSlice"
import itemReducer from "../features/itemSlice"

// ストアの作成
const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemReducer,
  },
});

// RootState と AppDispatch の型をエクスポート
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

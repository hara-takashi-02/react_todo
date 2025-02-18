// features/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 型の定義
interface CounterState {
  value: number;
}

// 初期状態
const initialState: CounterState = {
  value: 0,
};

// スライスの作成
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators をエクスポート
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Reducer をエクスポート
export default counterSlice.reducer;

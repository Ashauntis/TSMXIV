import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    recipes: {},
    items: {},
  },
  reducers: {
    set_items: (state, action) => {
      state.items = {
        ...state.items,
        ...action.payload,
      }
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_items, decrement, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer
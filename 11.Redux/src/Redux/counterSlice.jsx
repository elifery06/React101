import { createSlice } from '@reduxjs/toolkit'

const inititialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    reducer: {

    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
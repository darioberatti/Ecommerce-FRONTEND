import { createAction, createReducer } from "@reduxjs/toolkit"

export const loginUser = createAction("LOGIN-USER")

const initialState = {
  value: {
    email: undefined,
    name: undefined,
    id: undefined,
    isAdmin: undefined
  }
}

const userReducer = createReducer(initialState, {
  [loginUser]: (state, action) => {
    state.value = action.payload 
  }
})

export default userReducer
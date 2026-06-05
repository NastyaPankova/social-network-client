import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '~/app/store/slices/auth/initialState'

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload
      localStorage.setItem('token', action.payload ?? '')
    },
  },
  /*extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    })
  },*/
})

export const { logout, setUser, setToken } = authSlice.actions
export default authSlice.reducer

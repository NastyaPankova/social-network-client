import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '~/toDelete/_auth/initialState'
import type { IUser } from '~/interfaces/IUser'
import { setIsAuth } from '~/store/slices/app/slice'
import AuthService from '~/services/authService'

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      const response = AuthService.logout()
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload
      localStorage.setItem('token', action.payload ?? '')
    },
  },
  /*extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userProfile = action.payload.userProfile
      state.token = action.payload.token
    })
  },*/
})

export const { logout, setUser, setToken } = authSlice.actions
export default authSlice.reducer

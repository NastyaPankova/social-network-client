import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { login, registration } from '~/store/slices/authentication/thunks'
import { initialState } from '~/store/slices/authentication/initialState'
import AuthService from '~/services/authService'

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logout: (state) => {
      const response = AuthService.logout()
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.token = action.payload.accessToken
        state.user = action.payload.user
      })

      .addCase(registration.fulfilled, (state, action: PayloadAction<any>) => {
        state.token = action.payload.accessToken
        state.user = action.payload.user
      })

      .addCase(login.rejected, (state) => {
        state.user = null
        state.token = null
      })

      .addCase(registration.rejected, (state) => {
        state.user = null
        state.token = null
      })
  },
})
export const { logout } = authenticationSlice.actions
export default authenticationSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { authState } from '~/app/store/slices/auth/types'
import { loginUser } from '~/app/store/slices/auth/thunks'

const initialState: authState = {
  user: null,
  token: null,
  isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },

    //todo
    //комментарий к extrareducers
    //loginStart: (state) => {
    //       state.isLoading = true;
    //     },
    //     loginSuccess: (state, action) => {
    //       state.isLoading = false;
    //       state.user = action.payload.user;
    //       state.token = action.payload.token;
    //     },
    //     loginFailure: (state, action) => {
    //       state.isLoading = false;
    //     },
    //в loginUser добавятся
    // ...function (dispatch)
    //   try {dispatch(loginStart())}
    // dispatch(loginSuccess())
    // catch {dispatch(loginFailure)}
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer

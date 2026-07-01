import { type Action, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '~/store/slices/app/initialState'
import { login, registration } from '~/store/slices/authentication/thunks'
import { getLimitPosts } from '~/store/slices/post/thunks'

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
  //q
  //logout внутри app slice
  extraReducers: (builder) => {
    //logout
    builder.addCase('_auth/logout', (state) => {
      state.isAuth = false
      state.error = null
    })
    builder
      .addCase('authentication/logout', (state) => {
        state.isAuth = false
        state.error = null
      })
      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false
        state.isAuth = true
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isAuth = false
        state.error = action.payload || 'Unauthorized '
      })
      //registration
      .addCase(registration.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(registration.fulfilled, (state) => {
        state.isLoading = false
        state.isAuth = true
      })
      .addCase(registration.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isAuth = false
        state.error = action.payload || 'Registration failed'
      })
      // feed
      .addCase(getLimitPosts.pending, (state, action) => {
        const isFirstPage = !action.meta.arg // Если аргумента (курсора) нет — это первая страница
        if (isFirstPage) {
          state.isLoading = true
        }
        state.error = null
      })
      .addCase(getLimitPosts.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(getLimitPosts.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload || 'Failed to load posts'
      })
  },
})

export const { setIsLoading, setIsAuth } = appSlice.actions
export default appSlice.reducer

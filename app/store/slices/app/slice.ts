import { type Action, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '~/store/slices/app/initialState'

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
    builder.addCase('auth/logout', (state) => {
      state.isAuth = false
    })
  },
})

export const { setIsLoading, setIsAuth } = appSlice.actions
export default appSlice.reducer

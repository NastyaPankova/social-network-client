import { type Action, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '~/app/store/slices/app/initialState'

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setIsLoading } = appSlice.actions
export default appSlice.reducer

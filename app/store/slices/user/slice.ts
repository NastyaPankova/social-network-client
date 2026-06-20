import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '~/store/slices/user/initialState'
import { getUserById } from '~/store/slices/user/thunks'
import type { IUser } from '~/interfaces/IUser'

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearProfile(state) {
      state.profile = null
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.profile = action.payload
      })
      .addCase(getUserById.rejected, (state) => {
        state.profile = null
      })
  },
})

export const { clearProfile } = userSlice.actions
export default userSlice.reducer

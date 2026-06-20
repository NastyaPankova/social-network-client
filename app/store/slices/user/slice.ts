import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '~/store/slices/user/initialState'
import type { IUser } from '~/interfaces/IUser'

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.profile = null
    },
    setProfile: (state, action: PayloadAction<IUser | null>) => {
      state.profile = action.payload
    },
  },
  /*extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    })
  },*/
})

export const { clearProfile, setProfile } = userSlice.actions
export default userSlice.reducer

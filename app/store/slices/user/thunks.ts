import { createAsyncThunk } from '@reduxjs/toolkit'
import { setIsLoading } from '~/store/slices/app/slice'
import UserService from '~/services/userService'
import { clearProfile, setProfile } from '~/store/slices/user/slice'

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async function (id: string, { rejectWithValue, dispatch }) {
    try {
      dispatch(setIsLoading(true))

      const response = await UserService.getUserById(id)
      debugger
      dispatch(setProfile(response.data))
    } catch (error) {
      dispatch(clearProfile())
      return rejectWithValue(error)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
)

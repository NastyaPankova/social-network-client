import { createAsyncThunk } from '@reduxjs/toolkit'
import UserService from '~/services/userService'

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await UserService.getUserById(id)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)

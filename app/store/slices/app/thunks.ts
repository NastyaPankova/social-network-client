import { createAsyncThunk } from '@reduxjs/toolkit'
import { setIsAuth, setIsLoading } from '~/store/slices/app/slice'
import { setToken, setUser } from '~/toDelete/_auth/slice'
import type { IUser } from '~/interfaces/IUser'
import api from '~/api'

export const checkAuth = createAsyncThunk(
  'app/_auth',
  async function (_, { rejectWithValue, dispatch }) {
    try {
      dispatch(setIsLoading(true))

      const response = await api.get<IUser>('/auth/me')
      console.log(response)

      dispatch(setUser(response.data))
      dispatch(setIsAuth(true))
      return response.data
    } catch (error) {
      dispatch(setUser(null))
      dispatch(setToken(null))
      dispatch(setIsAuth(false))
      return rejectWithValue(error)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
)

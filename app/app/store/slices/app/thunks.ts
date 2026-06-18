import { createAsyncThunk } from '@reduxjs/toolkit'
import { setIsAuth, setIsLoading } from '~/app/store/slices/app/slice'
import { setToken, setUser } from '~/app/store/slices/auth/slice'
import type { IAuthResponse } from '~/app/interfaces/IAuthResponse'
import axios from 'axios'
import type { IUser } from '~/app/interfaces/IUser'
import api from '~/app/api'

export const checkAuth = createAsyncThunk(
  'app/auth',
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

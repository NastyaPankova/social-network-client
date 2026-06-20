import { createAsyncThunk } from '@reduxjs/toolkit'
import { setIsAuth, setIsLoading } from '~/store/slices/app/slice'
import { setToken, setUser } from '~/store/slices/auth/slice'
import AuthService from '~/services/authService'

interface credentialsLog {
  email: string
  password: string
}

interface credentialsReg {
  name: string
  email: string
  password: string
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async function (
    { email, password }: credentialsLog,
    { rejectWithValue, dispatch }
  ) {
    try {
      dispatch(setIsLoading(true))

      const response = await AuthService.login(email, password)
      debugger
      dispatch(setToken(response.data.accessToken))
      dispatch(setUser(response.data.user))
      dispatch(setIsAuth(true))
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

export const registrationUser = createAsyncThunk(
  'auth/registrationUser',
  async function (
    { name, email, password }: credentialsReg,
    { rejectWithValue, dispatch }
  ) {
    try {
      dispatch(setIsLoading(true))

      const response = await AuthService.registration(name, email, password)
      debugger
      dispatch(setToken(response.data.accessToken))
      dispatch(setUser(response.data.user))
      dispatch(setIsAuth(true))
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

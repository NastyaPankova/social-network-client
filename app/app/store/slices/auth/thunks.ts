import { createAsyncThunk } from '@reduxjs/toolkit'
import { setIsAuth, setIsLoading } from '~/app/store/slices/app/slice'
import { setToken, setUser } from '~/app/store/slices/auth/slice'
import AuthService from '~/app/services/authService'

interface credentials {
  email: string
  password: string
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async function (
    { email, password }: credentials,
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

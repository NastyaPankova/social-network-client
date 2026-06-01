import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit'

interface AuthState {
  user: string | null
  token: string | null
  isLoading: boolean
}

const token = 'MyNewToken'
const user = 'MyUser'

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    credentials: { email: string; password: string },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      /*const response = await fetch('https://reqres.in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })*/
      const response_test = { user: user, token: token }
      console.log(response_test)
      //const data = await response.json()
      const data = response_test
      localStorage.setItem('token', data.token)
      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // set flag to {value} -> общее использование для загрузки
  // set user
  // set token
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      //state.error = null
      localStorage.removeItem('token') // Удаляем токен из памяти браузера
    },
  },
  // Обработка стадий асинхронного запроса (логина)
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        //state.error = null
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ user: string; token: string }>) => {
          state.isLoading = false
          state.user = action.payload.user
          state.token = action.payload.token
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        //state.error = action.payload as string
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer

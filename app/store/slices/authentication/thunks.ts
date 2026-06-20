import { createAsyncThunk } from '@reduxjs/toolkit'
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

export const login = createAsyncThunk(
  'authentication/login',
  async ({ email, password }: credentialsLog, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(email, password)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)

export const registration = createAsyncThunk(
  'authentication/registration',
  async ({ name, email, password }: credentialsReg, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(name, email, password)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)
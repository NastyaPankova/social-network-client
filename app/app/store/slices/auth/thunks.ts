import { createAsyncThunk } from '@reduxjs/toolkit'

//todo
//delete test e-mail and password
const testEmail = 'Test E-mail'
const testPassword = 'Test Password'
const testToken = 'Test Token'
const testUser = 'Test User'

interface credentials {
  email: string
  password: string
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async function (credentials: credentials, { rejectWithValue }) {
    try {
      /*const response = await fetch('localhost////', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })*/

      /* if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error)
      }*/

      //const data = await response.json()
      //localStorage.setItem('token', data.token)

      const responseDataTest = { user: testUser, token: testToken }
      console.log(responseDataTest)

      localStorage.setItem('token', responseDataTest.token)

      return responseDataTest
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

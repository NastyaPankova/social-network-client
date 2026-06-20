import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/slice'
import appReducer from './slices/app/slice'
import userReducer from './slices/user/slice'
import authenticationReducer from './slices/authentication/slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    user: userReducer,
    authentication: authenticationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

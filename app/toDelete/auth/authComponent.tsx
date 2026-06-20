/*import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { loginUser } from './authSlice'
import type { RootState, AppDispatch } from '../app/store/store'
import { TextField, Button, Alert } from '@mui/material'

export function AuthComponent() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate() // Создаем функцию для смены страниц

  const testEmail = 'Test E-mail'
  const testPassword = 'Test Password'

  const { isLoading } = useSelector((state: RootState) => state.auth)
  const [email, setEmail] = useState(testEmail) // Сразу тестовый email
  const [password, setPassword] = useState(testPassword)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await dispatch(loginUser({ email, password })).unwrap()

    navigate('/secret') // Перенаправляем на защищенную страницу
  }

  return (
    <form
      onSubmit={handleSubmit}
      styles={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '320px',
        margin: '40px auto',
      }}
    >
      <h1>Login</h1>

      <TextField
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" disabled={isLoading}>
        {isLoading ? 'Loading' : 'Ok'}
      </Button>
    </form>
  )
}*/

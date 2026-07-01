import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logout } from './slices/authSlice'
import { RootState, AppDispatch } from '../app/store/store'
import { TextField, Button, CircularProgress, Alert } from '@mui/material'

export function AuthForm() {
  const dispatch = useDispatch<AppDispatch>()

  // Достаем нужные данные из глобального слайса _auth
  const { user, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  )

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Отправляем асинхронный экшен с данными формы
    dispatch(loginUser({ email, password }))
  }

  // Если пользователь уже авторизован, показываем приветствие и кнопку Выйти
  if (user) {
    return (
      <div>
        <h2>Добро пожаловать, {user.name}!</h2>
        <p>Ваш Email: {user.email}</p>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(logout())}
        >
          Выйти из аккаунта
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '300px',
      }}
    >
      <h2>Вход в систему</h2>

      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />

      <TextField
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />

      <Button type="submit" variant="contained" disabled={isLoading}>
        {isLoading ? <CircularProgress size={24} /> : 'Войти'}
      </Button>
    </form>
  )
}

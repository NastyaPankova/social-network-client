import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import type { RootState } from './store'

export function ProtectedRoute() {
  // Достаем токен авторизации из Redux
  const { user } = useSelector((state: RootState) => state.auth)

  // Если токена нет — отправляем пользователя на страницу логина
  if (!user) {
    return <Navigate to="/auth" replace />
  }

  // Если токен есть — рендерим дочерние закрытые страницы через <Outlet />
  return <Outlet />
}

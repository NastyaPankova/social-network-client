import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { getCurrentUser, getToken } from '~/app/store/slices/auth/selectors'

export function ProtectedRoute() {
  //const user = useSelector(getCurrentUser)
  //const navigate = useNavigate()
  const token = useSelector(getToken)

  if (!token) {
    //return navigate('/login', { replace: true })
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { getCurrentUser, getToken } from '~/app/store/slices/auth/selectors'
import { setToken } from '~/app/store/slices/auth/slice'

export function ProtectedRoute() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    debugger
    dispatch(setToken(token))
    if (!token) {
      navigate('/login', { replace: true })
      //return <Navigate to="/login" replace />
    }
  }, [])

  return <Outlet />
}

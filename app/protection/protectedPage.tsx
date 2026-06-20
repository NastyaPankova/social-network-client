import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { getCurrentUser, getToken } from '~/store/slices/auth/selectors'
import { setToken } from '~/store/slices/auth/slice'
import type { AppDispatch } from '~/store/store'
import { history } from '~/history'
import { checkAuth } from '~/store/slices/app/thunks'
import { isAuth, isLoading } from '~/store/slices/app/selectors'
import { LinearProgress } from '@mui/material'

export function Auth() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  history.navigate = navigate
  useEffect(() => {
    dispatch(checkAuth()).unwrap()
  }, [])
  const auth = useSelector(isAuth)
  const user = useSelector(getCurrentUser)
  const loading = useSelector(isLoading)
  if (loading) {
    ;<LinearProgress aria-label="Loading…" />
  } else {
    return (
      <>
        <h1>{auth ? `Hello, ${user?.name}` : 'Login'}</h1>
        <Outlet />
      </>
    )
  }
}

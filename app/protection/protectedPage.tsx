import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'
import {
  getCurrentUser,
  getToken,
} from '~/store/slices/authentication/selectors'
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
    return <LinearProgress aria-label="Loading…" />
  } else {
    return <Outlet />
  }
}

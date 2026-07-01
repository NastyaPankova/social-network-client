import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { isLoading } from '~/store/slices/app/selectors'
import React from 'react'
import type { AppDispatch } from '~/store/store'
import { getCurrentUser } from '~/store/slices/authentication/selectors'
import { useNavigate, useLocation } from 'react-router' // 1. Импортируем useLocation
import { login } from '~/store/slices/authentication/thunks'
import { logout } from '~/store/slices/authentication/slice'

export function ButtonOkLogin({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const location = useLocation()

  const user = useSelector(getCurrentUser)
  const loading = useSelector(isLoading)

  const onOkClick = async () => {
    if (user) {
      dispatch(logout())
    }

    try {

      await dispatch(login({ email, password })).unwrap()


      let from = location.state?.from?.pathname


      if (!from) {
        const searchParams = new URLSearchParams(location.search)
        from = searchParams.get('from') || undefined
      }


      const targetPath = from || '/profile'

      navigate(targetPath, { replace: true })
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  return (
    <Button variant="contained" onClick={onOkClick} disabled={loading}>
      {loading ? 'Loading' : 'Ok'}
    </Button>
  )
}

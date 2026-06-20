import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { isLoading } from '~/store/slices/app/selectors'
import React from 'react'
import type { AppDispatch } from '~/store/store'
import { loginUser } from '~/store/slices/auth/thunks'
import { getToken } from '~/store/slices/auth/selectors'
import { useNavigate } from 'react-router'

export function ButtonOkLogin({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const onOkClick = async (email: string, password: string) => {
    console.log(email, password)

    await dispatch(loginUser({ email, password })).unwrap()
    debugger
    navigate('/profile/me', { replace: true })
  }

  const loading = useSelector(isLoading)

  return (
    <Button
      variant="contained"
      onClick={() => onOkClick(email, password)}
      disabled={loading}
    >
      {loading ? 'Loading' : 'Ok'}
    </Button>
  )
}

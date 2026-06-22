import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { isLoading } from '~/store/slices/app/selectors'
import React from 'react'
import type { AppDispatch } from '~/store/store'
import { registration } from '~/store/slices/authentication/thunks'
import { useNavigate } from 'react-router'

export function ButtonOkRegistration({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password: string
}) {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const onOkClick = async (name: string, email: string, password: string) => {
    await dispatch(registration({ name, email, password })).unwrap()
    debugger
    navigate('/')
  }

  const loading = useSelector(isLoading)

  return (
    <Button
      variant="contained"
      onClick={() => onOkClick(name, email, password)}
      disabled={loading}
    >
      {loading ? 'Loading' : 'Ok'}
    </Button>
  )
}

import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { isLoading } from '~/app/store/slices/app/selectors'
import React from 'react'
import type { AppDispatch } from '~/app/store/store'
import { loginUser } from '~/app/store/slices/auth/thunks'
import { getToken } from '~/app/store/slices/auth/selectors'
import { useNavigate } from 'react-router'

export function ButtonOk({
  email,
  password,
  fromForm,
}: {
  email: string
  password: string
  fromForm: string
}) {
  /*const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await dispatch(loginUser({ email, password })).unwrap()

    navigate('/secret') // Перенаправляем на защищенную страницу
  */

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const onOkClick = async (
    email: string,
    password: string,
    fromForm: string
  ) => {
    console.log(email, password, fromForm)
    await dispatch(loginUser({ email, password }))
    navigate('/secret')
  }

  const loading = useSelector(isLoading)

  return (
    <Button
      variant="contained"
      onClick={() => onOkClick(email, password, fromForm)}
      disabled={loading}
    >
      {loading ? 'Loading' : 'Ok'}
    </Button>
  )
}

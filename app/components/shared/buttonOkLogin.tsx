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
  const location = useLocation() // 2. Получаем текущую локацию, где лежат мета-данные о возврате

  const user = useSelector(getCurrentUser)
  const loading = useSelector(isLoading)

  const onOkClick = async () => {
    if (user) {
      dispatch(logout())
    }

    try {
      // Выполняем логин и ждем успешного завершения через .unwrap()
      await dispatch(login({ email, password })).unwrap()

      // 3. Вытаскиваем путь возврата из истории роутера (если он пришел от интерцептора или Auth компонента)
      let from = location.state?.from?.pathname

      // 4. Если в state пусто (например, интерцептор сделал fallback на window.location.href)
      if (!from) {
        const searchParams = new URLSearchParams(location.search)
        from = searchParams.get('from') || undefined
      }

      // 5. Перенаправляем: на сохраненный роут, либо на '/profile' (если зашли просто так)
      const targetPath = from || '/profile'

      navigate(targetPath, { replace: true })
    } catch (error) {
      // Сюда код попадет, только если thunk вернет rejectWithValue (ошибка пароля, сети и т.д.)
      console.error('Не удалось войти в аккаунт:', error)
    }
  }

  return (
    <Button variant="contained" onClick={onOkClick} disabled={loading}>
      {loading ? 'Loading' : 'Ok'}
    </Button>
  )
}

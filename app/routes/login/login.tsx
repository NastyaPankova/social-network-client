import { LoginPage } from '~/pages/login/login-page'
import { Outlet } from 'react-router'

export default function Login() {
  return (
    <>
      <LoginPage />
      <Outlet />
    </>
  )
}

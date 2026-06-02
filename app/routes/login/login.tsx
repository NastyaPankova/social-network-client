import { LoginPage } from '~/pages/login/loginPage'
import { Outlet } from 'react-router'

export default function Login() {
  return (
    <>
      <LoginPage />
      <Outlet />
    </>
  )
}

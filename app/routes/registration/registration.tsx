import { Outlet } from 'react-router'
import { RegistrationPage } from '~/pages/registration/registration-page'

export default function Registration() {
  return (
    <>
      <RegistrationPage />
      <Outlet />
    </>
  )
}

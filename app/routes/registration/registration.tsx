import { Outlet } from 'react-router'
import { RegistrationPage } from '~/pages/registration/registrationPage'

export default function Registration() {
  return (
    <>
      <RegistrationPage />
      <Outlet />
    </>
  )
}

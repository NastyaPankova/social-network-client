import { Outlet } from 'react-router'
import { ProfilePage } from '~/pages/profile/profilePage'

export default function Profile() {
  return (
    <>
      <ProfilePage />
      <Outlet />
    </>
  )
}

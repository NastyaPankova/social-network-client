import { Outlet } from 'react-router'
import { UserProfilePage } from '~/pages/userProfile/userProfilePage'

export default function Profile() {
  return (
    <>
      <UserProfilePage />
      <Outlet />
    </>
  )
}

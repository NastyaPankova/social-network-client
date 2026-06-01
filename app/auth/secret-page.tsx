import { logout } from '~/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '~/auth/store'
import { useNavigate } from 'react-router'

const getCurrentUser = (state: RootState) => state.auth.user

export default function GetSecret() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(getCurrentUser)

  const handleLogout = () => {
    dispatch(logout())

    navigate('/auth', { replace: true })
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>You got secret!</h1>
      <div>{user}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

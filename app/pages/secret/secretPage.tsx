import { logout } from '~/app/store/slices/auth/slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getCurrentUser } from '~/app/store/slices/auth/selectors'

export default function GetSecret() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(getCurrentUser)

  const handleLogout = () => {
    dispatch(logout())

    navigate('/login', { replace: true })
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>You got secret!</h1>
      <div>{user?.name}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

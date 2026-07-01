import { Link, useNavigate } from 'react-router'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import IconButton from '@mui/material/IconButton'
import { logout } from '~/toDelete/_auth/slice'
import { useDispatch } from 'react-redux'
import Tooltip from '@mui/material/Tooltip'
import LogoutIcon from '@mui/icons-material/Logout'
import * as React from 'react'

export default function LogoutButton() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login', { replace: true })
  }

  return (
    <Tooltip title="Logout">
      <IconButton
        onClick={handleLogout}
        sx={{
          color: 'inherit',
          padding: '8px',
        }}
      >
        <LogoutIcon sx={{ fontSize: '1,75rem' }} />
      </IconButton>
    </Tooltip>
  )
}

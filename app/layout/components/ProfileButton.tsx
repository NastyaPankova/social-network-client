import { Link } from 'react-router'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function ProfileButton() {
  //todo
  //изменить путь
  return (
    <Tooltip title="My Profile">
      <IconButton
        component={Link}
        to="/profile/me"
        sx={{
          color: 'inherit',
          padding: '8px',
        }}
      >
        <AccountCircleIcon sx={{ fontSize: '3rem' }} />
      </IconButton>
    </Tooltip>
  )
}

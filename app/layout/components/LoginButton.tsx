import LoginIcon from '@mui/icons-material/Login'
import { Link } from 'react-router'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function LoginButton() {
  return (
    <Button
      color="inherit"
      component={Link}
      to="/login"
      startIcon={<LoginIcon />}
    >
      <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
        Login
      </Typography>
    </Button>
  )
}

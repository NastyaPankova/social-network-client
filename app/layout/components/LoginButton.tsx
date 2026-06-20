import LoginIcon from '@mui/icons-material/Login'
import { Link } from 'react-router'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Tooltip from "@mui/material/Tooltip";

export default function LoginButton() {
  return (
      <Tooltip title="Login">
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
      </Tooltip>

  )
}

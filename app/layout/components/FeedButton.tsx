import { Link, useLocation, useNavigate } from 'react-router'
import Button from '@mui/material/Button'
import { DynamicFeed } from '@mui/icons-material'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

export default function FeedButton() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (event: { preventDefault: () => void }) => {
    if (location.pathname === '/') {
      event.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      navigate('/')
    }
  }
  return (
    <Tooltip title="Feed List">
      <Button
        onClick={handleClick}
        color="inherit"
        startIcon={<DynamicFeed sx={{ fontSize: '2rem !important' }} />}
      >
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          Feed
        </Typography>
      </Button>
    </Tooltip>
  )
}

import { useNavigate } from 'react-router'
import Button from '@mui/material/Button'

export function ButtonHome() {
  const navigate = useNavigate()
  return (
    <Button variant="contained" onClick={() => navigate('/')}>
      Home
    </Button>
  )
}

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import styles from '~/styles/containers.module.scss'
import LoginButton from '~/layout/components/LoginButton'
import FeedButton from '~/layout/components/FeedButton'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#ffffff', // Делаем сам хедер полностью белым
          boxShadow: 'none', // Опционально: убираем тень, если она не нужна
          borderBottom: '1px solid #e0e0e0', // Опционально: добавляем тонкую серую линию снизу
        }}
      >
        <Container maxWidth={false} className={styles.mainHeaderContainer}>
          <Toolbar>
            <FeedButton />
            <Box sx={{ flexGrow: 1 }} />
            <LoginButton />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

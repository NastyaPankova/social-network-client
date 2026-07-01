import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import styles from '~/styles/containers.module.scss'
import LoginButton from '~/layout/components/LoginButton'
import FeedButton from '~/layout/components/FeedButton'
import { isAuth } from '~/store/slices/app/selectors'
import ProfileButton from '~/layout/components/ProfileButton'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import LogoutButton from '~/layout/components/LogoutButton'

export default function ButtonAppBar() {
  const auth = useSelector(isAuth)
  const location = useLocation()
  const isProfilePage = location.pathname === '/profile'
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Container maxWidth={false} className={styles.mainHeaderContainer}>
          <Toolbar disableGutters>
            <FeedButton />
            <Box sx={{ flexGrow: 1 }} />
            {auth ? (
              <>
                {isProfilePage && <LogoutButton />}
                <ProfileButton />
              </>
            ) : (
              <LoginButton />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

import * as React from 'react'
import Box from '@mui/material/Box'
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Home from '@mui/icons-material/Home'
import People from '@mui/icons-material/People'
import LogoutIcon from '@mui/icons-material/Logout'
import FeedIcon from '@mui/icons-material/Feed'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'

import { getCurrentUser } from '~/store/slices/auth/selectors'
import { logout } from '~/store/slices/auth/slice'

// Экшены и селекторы для публичного профиля
// УБРАНО: setProfile больше не нужен, данные сохраняются автоматически через extraReducers санки
import { clearProfile } from '~/store/slices/user/slice'
import { getProfile } from '~/store/slices/user/selectors'
import { getUserById } from '~/store/slices/user/thunks'
import type { AppDispatch } from '~/store/store'
import { isLoading } from '~/store/slices/app/selectors'

// Функция аватара со стандартным фиксированным цветом
function stringAvatar(name: string) {
  console.log(name)
  const cleanName = name.trim()
  if (!cleanName) {
    return {
      sx: { bgcolor: 'rgb(204,234,255)', color: '#051e34' },
      children: 'N',
    }
  }
  const words = cleanName.split(/\s+/)
  const firstLetter = words[0]?.[0] || ''
  const secondLetter = words[1]?.[0] || ''
  return {
    sx: {
      bgcolor: 'rgb(204,234,255)',
      color: '#051e34',
    },
    children: `${firstLetter}${secondLetter}`.toUpperCase(),
  }
}

const listItems = [
  { icon: <FeedIcon />, label: 'Posts' },
  { icon: <FavoriteIcon />, label: 'Likes' },
  { icon: <People />, label: 'Followers' },
  { icon: <PeopleAltIcon />, label: 'Followings' },
]

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': { paddingLeft: 24, paddingRight: 24 },
  '& .MuiListItemIcon-root': { minWidth: 0, marginRight: 16 },
  '& .MuiSvgIcon-root': { fontSize: 20 },
})

const darkTheme = createTheme({
  components: {
    MuiListItemButton: { defaultProps: { disableTouchRipple: true } },
  },
  palette: {
    mode: 'dark',
    primary: { main: 'rgb(102, 157, 246)' },
    background: { paper: 'rgb(5, 30, 52)' },
  },
})

export default function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const useAppDispatch = () => useDispatch<AppDispatch>()
  const asyncDispatch = useAppDispatch()
  const { id } = useParams<{ id?: string }>()
  const [open, setOpen] = React.useState(true)

  // Данные меня из ветки auth
  const myUser = useSelector(getCurrentUser)

  // Данные чужого пользователя из ветки profile/user
  const profile = useSelector(getProfile)
  const loading = useSelector(isLoading)

  const isMe = !id || id === 'me'

  // Запрос данных чужого профиля с бэкенда при изменении ID в строке браузера
  React.useEffect(() => {
    if (!isMe && id) {
      asyncDispatch(getUserById(id))
    }
    // Очищаем стейт при размонтировании страницы или переключении на "me"
    return () => {
      dispatch(clearProfile())
    }
  }, [id, isMe, dispatch])

  // Автоматический редирект на /profile/me, если авторизованный юзер забрел на свой id
  React.useEffect(() => {
    if (id && myUser && String(id) === String(myUser.id)) {
      navigate('/profile/me', { replace: true })
    }
  }, [id, myUser, navigate])

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login', { replace: true })
  }

  // Определяем, какую информацию рендерить на основе текущего роута
  const displayUser = isMe ? myUser : profile

  if (isMe && !myUser) {
    return <Typography sx={{ p: 3 }}>Loading profile...</Typography>
  }

  return (
    <Box sx={{ display: 'flex', gap: 4, p: 3, width: '100%' }}>
      <ThemeProvider theme={darkTheme}>
        <Paper
          elevation={0}
          sx={{ maxWidth: 256, width: '100%', height: 'fit-content' }}
        >
          <FireNav component="nav" disablePadding>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton onClick={() => navigate('/')} sx={{ height: 56 }}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Feed"
                  slotProps={{
                    primary: {
                      color: 'primary',
                      sx: { fontWeight: 'medium' },
                      variant: 'body2',
                    },
                  }}
                />
              </ListItemButton>
              {isMe && (
                <Tooltip title="Logout">
                  <IconButton
                    onClick={handleLogout}
                    size="large"
                    sx={{
                      '& svg': {
                        color: 'rgba(255,255,255,0.8)',
                        transition: '0.2s',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        height: '80%',
                        display: 'block',
                        left: 0,
                        width: '1px',
                        bgcolor: 'divider',
                      },
                    }}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              )}
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : 'transparent',
                pb: open ? 2 : 0,
                transition: 'background-color 0.2s, padding 0.2s',
              }}
            >
              <ListItemButton
                alignItems="center"
                onClick={() => setOpen(!open)}
                sx={{ px: 3, pt: open ? 2 : 2.5, pb: open ? 2 : 2.5 }}
              >
                <ListItemIcon sx={{ mt: 0 }}>
                  <Avatar {...stringAvatar(displayUser?.name || '')} />
                </ListItemIcon>

                <ListItemText
                  primary={
                    loading ? 'Loading...' : displayUser?.name || 'Unknown'
                  }
                  secondary={isMe ? 'My Profile' : 'Public Profile'}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 15,
                        fontWeight: 'medium',
                        lineHeight: '20px',
                        mb: '2px',
                      },
                    },
                    secondary: {
                      noWrap: true,
                      sx: {
                        fontSize: 12,
                        lineHeight: '16px',
                        display: open ? 'none' : 'block',
                        color: 'rgba(255,255,255,0.5)',
                      },
                    },
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 1,
                    transition: '0.2s',
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    alignSelf: 'center',
                  }}
                />
              </ListItemButton>
              {open &&
                listItems.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{
                      py: 1,
                      minHeight: 32,
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  )
}

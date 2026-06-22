import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import People from '@mui/icons-material/People'
import FeedIcon from '@mui/icons-material/Feed'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import Avatar from '@mui/material/Avatar'
import { Grid, LinearProgress } from '@mui/material'
import Divider from '@mui/material/Divider'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Outlet, useLocation } from 'react-router'
import { getCurrentUser } from '~/store/slices/authentication/selectors'
import { isLoading } from '~/store/slices/app/selectors'
import { AvatarLetter } from '~/components/avatarLetter/avatarLetter'
import { checkAuth } from '~/store/slices/app/thunks'
import type { AppDispatch } from '~/store/store'

const listItems = [
  { icon: <FeedIcon />, label: 'Posts', path: 'posts' },
  { icon: <FavoriteIcon />, label: 'Likes', path: 'likes' },
  { icon: <People />, label: 'Followers', path: 'followers' },
  { icon: <PeopleAltIcon />, label: 'Followings', path: 'followings' },
]

export default function Profile() {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = React.useState(true)

  const user = useSelector(getCurrentUser)
  const loading = useSelector(isLoading)

  if (loading && !user) {
    return <LinearProgress aria-label="Loading…" />
  }
  const handleTabClick = (path: string) => {
    navigate(`/profile/${path}`)
  }

  return (
    <Grid
      container
      sx={{
        width: '100%',
        minHeight: '100vh',
        flexWrap: 'nowrap',
      }}
    >
      <Grid size="auto" sx={{ minWidth: 256, flexShrink: 0 }}>
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            bgcolor: 'transparent',
          }}
        >
          <List component="nav" disablePadding sx={{ bgcolor: 'transparent' }}>
            <Box
              sx={{
                bgcolor: 'transparent',
                pb: open ? 2 : 0,
                transition: 'background-color 0.2s, padding 0.2s',
              }}
            >
              <ListItemButton
                onClick={() => setOpen(!open)}
                sx={{ px: 3, py: 2 }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                  <AvatarLetter name={user?.name} />
                </ListItemIcon>

                <ListItemText
                  primary={loading ? 'Loading...' : user?.name || 'Unknown'}
                  secondary="My Profile"
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 15,
                        fontWeight: 'medium',
                      },
                    },
                    secondary: {
                      noWrap: true,
                      sx: {
                        fontSize: 12,
                        display: open ? 'none' : 'block',
                      },
                    },
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    transition: '0.2s',
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                  }}
                />
              </ListItemButton>

              {open && <Divider sx={{ mb: 1 }} />}

              {open &&
                listItems.map((item) => {
                  const isActive = location.pathname.endsWith(`/${item.path}`)

                  return (
                    <ListItemButton
                      key={item.label}
                      selected={isActive}
                      onClick={() => handleTabClick(item.path)}
                      sx={{ px: 3, py: 1 }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: 2,
                          color: isActive ? 'primary.main' : 'inherit',
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        slotProps={{
                          primary: {
                            sx: {
                              fontSize: 14,
                              fontWeight: isActive ? 'bold' : 'normal',
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  )
                })}
            </Box>
          </List>
        </Paper>
      </Grid>
      <Grid size="grow" sx={{ flexGrow: 1, minWidth: 0 }}>
        <Paper elevation={1} sx={{ minHeight: '100vh', height: '100%' }}>
          <Outlet />
        </Paper>
      </Grid>
    </Grid>
  )
}

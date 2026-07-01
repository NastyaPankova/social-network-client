import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import {
  Button,
  Grid,
  Typography,
  Divider,
  CardActions,
  LinearProgress,
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useNavigate, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser } from '~/toDelete/_auth/selectors'
import { getUserProfile } from '~/store/slices/user/selectors'
import { getUserById } from '~/store/slices/user/thunks'
import type { AppDispatch } from '~/store/store'
import { AvatarLetter } from '~/components/avatarLetter/avatarLetter'

export default function UserProfile() {
  const [isFollowing, setIsFollowing] = React.useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const currentUser = useSelector(getCurrentUser)
  const viewedProfile = useSelector(getUserProfile)

  const isOwnId = id && currentUser && String(id) === String(currentUser.id)

  React.useEffect(() => {
    if (isOwnId) {
      navigate('/', { replace: true })
    }
  }, [isOwnId, navigate])

  React.useEffect(() => {
    if (id && !isOwnId) {
      dispatch(getUserById(id))
    }
  }, [id, isOwnId, dispatch])

  if (!currentUser) {
    return <LinearProgress aria-label="Loading session..." />
  }

  if (isOwnId) {
    return <LinearProgress aria-label="Redirecting..." />
  }

  const isProfileLoading =
    !viewedProfile || String(viewedProfile.id) !== String(id)

  if (isProfileLoading) {
    return <LinearProgress aria-label="Loading profile..." />
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
          }}
        >
          <Box sx={{ bgcolor: 'transparent' }}>
            <Card
              variant="outlined"
              sx={{
                maxWidth: 360,
                borderRadius: 4,
                borderColor: 'grey.200',
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <AvatarLetter name={viewedProfile.name} />
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, color: 'text.primary' }}
                  >
                    {viewedProfile.name}
                  </Typography>
                </Box>
              </CardContent>

              <Divider />

              <CardActions sx={{ px: 2, py: 1.5, justifyContent: 'center' }}>
                <Button
                  variant={isFollowing ? 'outlined' : 'contained'}
                  color={isFollowing ? 'inherit' : 'primary'}
                  size="small"
                  onClick={() => setIsFollowing(!isFollowing)}
                  sx={{
                    borderRadius: 20,
                    textTransform: 'none',
                    fontWeight: 700,
                    px: 2,
                  }}
                >
                  {isFollowing ? 'Вы подписаны' : 'Подписаться'}
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Paper>
      </Grid>
      <Grid size="grow" sx={{ flexGrow: 1, minWidth: 0 }}>
        <Paper
          elevation={1}
          sx={{
            minHeight: '100vh',
            height: '100%',
          }}
        ></Paper>
      </Grid>
    </Grid>
  )
}

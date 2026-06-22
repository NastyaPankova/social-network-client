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
import Avatar from '@mui/material/Avatar'
import { useNavigate, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser } from '~/store/slices/auth/selectors'
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

  // Флаг: совпадает ли ID из URL с ID текущего авторизованного пользователя
  const isOwnId = id && currentUser && String(id) === String(currentUser.id)

  // 1. Редирект, если это профиль текущего пользователя
  React.useEffect(() => {
    if (isOwnId) {
      navigate('/', { replace: true })
    }
  }, [isOwnId, navigate])

  // 2. Загружаем данные чужого профиля, ТОЛЬКО если это действительно чужой ID
  React.useEffect(() => {
    if (id && !isOwnId) {
      dispatch(getUserById(id))
    }
  }, [id, isOwnId, dispatch])

  // Шаг 1: Сначала ждем сессию текущего пользователя
  if (!currentUser) {
    return <LinearProgress aria-label="Loading session..." />
  }

  // Шаг 2: Если мы прямо сейчас редиректим пользователя на /profile,
  // показываем базовый лоадер и НЕ проверяем viewedProfile, чтобы избежать зависания
  if (isOwnId) {
    return <LinearProgress aria-label="Redirecting..." />
  }

  // Шаг 3: Проверяем загрузку профиля только для ОСТАЛЬНЫХ (чужих) пользователей
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
      {/* Левая колонка (Боковая панель) */}
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
              {/* Основной контент карточки */}
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

              {/* Разделительная черта */}
              <Divider />

              {/* Кнопка подписки */}
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

      {/* Правая колонка (Основной контент) */}
      <Grid size="grow" sx={{ flexGrow: 1, minWidth: 0 }}>
        <Paper
          elevation={1}
          sx={{
            minHeight: '100vh',
            height: '100%',
          }}
        >
          {/* Контент чужого профиля */}
        </Paper>
      </Grid>
    </Grid>
  )
}

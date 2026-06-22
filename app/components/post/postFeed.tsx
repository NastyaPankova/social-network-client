import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PetsIcon from '@mui/icons-material/Pets'
import { Alert, CardMedia, Snackbar } from '@mui/material'
import { AvatarLetter } from '~/components/avatarLetter/avatarLetter'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '~/store/store'
import { isAuth } from '~/store/slices/app/selectors'
import { useState } from 'react'
import { toggleLikePost } from '~/store/slices/post/thunks'
import type { CardMediaProps } from '@mui/material'
import type { ComponentPropsWithoutRef } from 'react'
import styles from '~/styles/media.module.scss'

export default function PostFeed({ post }: { post: IPost }) {
  const dispatch = useDispatch<AppDispatch>()
  const auth = useSelector(isAuth)
  const [showAuthWarning, setShowAuthWarning] = useState(false)

  //todo
  //вынести в какой-нибудь конфиг
  const BASE_URL = 'http://localhost:3000'

  // Создаем расширенный тип: пропсы CardMedia + нативные атрибуты тега video
  type VideoCardMediaProps = CardMediaProps & ComponentPropsWithoutRef<'video'>

  function getMediaConfig(url: string): VideoCardMediaProps {
    const isVideo = url ? /\.(mp4|webm|ogg|mov)$/i.test(url) : false
    const fullUrl = `${BASE_URL}/static/${url}`

    if (isVideo) {
      return {
        className: styles.media,
        component: 'video',
        src: fullUrl,
        controls: true, // Теперь TS знает, что это нативное свойство <video>
        autoPlay: true, // Передаем напрямую, videoHtmlAttributes больше не нужен
        muted: true,
        loop: true,
        playsInline: true,
      } as VideoCardMediaProps // Приведение типа для совместимости с MUI
    }

    return {
      className: styles.media,
      component: 'img',
      image: fullUrl,
      sx: { mt: 2, objectFit: 'cover' },
    } as VideoCardMediaProps
  }
  const handleLikeClick = () => {
    // 2. ПРОВЕРКА: Если пользователь не авторизован — прерываем действие и показываем Snackbar
    if (!auth) {
      setShowAuthWarning(true)
      return
    }
    dispatch(toggleLikePost(post.id))
  }
  return (
    <>
      <Card sx={{ maxWidth: '90%', width: 800, mx: 'auto', mb: 1 }}>
        <CardHeader
          avatar={<AvatarLetter name={post.author.name} />}
          title={post.author.name}
          subheader={new Date(post.createdAt).toLocaleString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        />

        <CardContent>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ whiteSpace: 'pre-wrap' }}
          >
            {post.content}
          </Typography>
          {post.media && (
            <CardMedia height="300" {...getMediaConfig(post.media)} />
          )}
        </CardContent>

        <CardActions
          disableSpacing
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <IconButton
            aria-label="like post"
            onClick={handleLikeClick}
            // Меняем цвет иконки на красный (error), если пост лайкнут
            color={post.isLiked ? 'error' : 'default'}
          >
            <FavoriteIcon />
          </IconButton>
          {/* Отображаем количество лайков рядом с кнопкой */}
          <Typography variant="caption" color="text.secondary">
            {post.likesCount}
          </Typography>
        </CardActions>
      </Card>
      <Snackbar
        open={showAuthWarning}
        autoHideDuration={3000}
        onClose={() => setShowAuthWarning(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowAuthWarning(false)}
          severity="info"
          variant="filled"
          sx={{ width: '100%', borderRadius: 3 }}
        >
          Login to like this post
        </Alert>
      </Snackbar>
    </>
  )
}

import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress, Typography, Box, Container } from '@mui/material'
import type { AppDispatch, RootState } from '~/store/store'
import {
  getCursor,
  getLoadedPosts,
  loadingPosts,
  next,
} from '~/store/slices/post/selectors'
import { getLimitPosts } from '~/store/slices/post/thunks'
import { clearFeed } from '~/store/slices/post/slice'
import PostFeed from '~/components/post/postFeed'
import containerStyles from '~/styles/containers.module.scss'

export function Feed() {
  const dispatch = useDispatch<AppDispatch>()

  // 1. Используем ваши новые селекторы для данных ленты
  const loadedPosts = useSelector(getLoadedPosts)
  const currentCursor = useSelector(getCursor)
  const hasNext = useSelector(next)
  const isFetchingMore = useSelector(loadingPosts)

  // 2. Глобальные состояния загрузки первой страницы и ошибок по-прежнему берем из appSlice
  const { isLoading, error } = useSelector((state: RootState) => state.app)

  const triggerRef = useRef<HTMLDivElement | null>(null)

  // Первичный запрос при открытии страницы ленты
  useEffect(() => {
    dispatch(getLimitPosts(undefined))

    // Очищаем посты в сторе при уходе с экрана, чтобы при возврате лента грузилась заново
    return () => {
      dispatch(clearFeed())
    }
  }, [dispatch])

  // Отслеживание скролла через Intersection Observer
  useEffect(() => {
    if (!hasNext || isLoading || isFetchingMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        // ИСПРАВЛЕНИЕ: Извлекаем первый элемент из массива entries
        const firstEntry = entries[0]

        // Теперь TypeScript видит свойство isIntersecting у конкретного элемента
        if (
          firstEntry &&
          firstEntry.isIntersecting &&
          currentCursor &&
          currentCursor !== 'null' &&
          currentCursor !== ''
        ) {
          dispatch(getLimitPosts(currentCursor))
        }
      },
      { threshold: 1.0 }
    )

    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }

    return () => {
      if (triggerRef.current) observer.unobserve(triggerRef.current)
    }
  }, [currentCursor, hasNext, isLoading, isFetchingMore, dispatch])

  // Экран первой загрузки (показываем MUI спиннер по центру)
  if (isLoading && loadedPosts.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    )
  }

  // Экран ошибки (если нет загруженных постов)
  if (error && loadedPosts.length === 0) {
    return (
      <Typography color="error" align="center" variant="h6" sx={{ mt: 5 }}>
        Error: {error}
      </Typography>
    )
  }

  return (
    <Container maxWidth={false} className={containerStyles.mainContainer}>
      <Box sx={{ height: 8 }} />
      {/* Список всех постов, полученных через селектор loadedPosts */}
      <Box>
        {loadedPosts.map((post) => (
          <PostFeed key={post.id} post={post} />
        ))}
      </Box>

      {/* Якорная зона в самом низу списка для триггера пагинации */}
      <Box
        ref={triggerRef}
        sx={{
          height: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2,
        }}
      >
        {/* Крутилка дозагрузки старых постов */}
        {isFetchingMore && <CircularProgress size={24} />}

        {/* Сообщение о конце ленты */}
        {!hasNext && loadedPosts.length > 0 && (
          <Typography variant="body2" color="text.secondary">
            No more posts to show
          </Typography>
        )}
      </Box>
    </Container>
  )
}

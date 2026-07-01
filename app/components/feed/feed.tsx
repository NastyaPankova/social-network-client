import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress, Typography, Box, Container } from '@mui/material'
import type { AppDispatch } from '~/store/store'
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
import { getError, isLoading } from '~/store/slices/app/selectors'

export function Feed() {
  const dispatch = useDispatch<AppDispatch>()

  const loadedPosts = useSelector(getLoadedPosts)
  const currentCursor = useSelector(getCursor)
  const hasNext = useSelector(next)
  const isLoadingMore = useSelector(loadingPosts)

  const error = useSelector(getError)
  const isFirstLoading = isLoadingMore && loadedPosts.length === 0

  const triggerRef = useRef<HTMLDivElement | null>(null)

  const cursorRef = useRef(currentCursor)
  useEffect(() => {
    cursorRef.current = currentCursor
  }, [currentCursor])

  useEffect(() => {
    dispatch(getLimitPosts(undefined))

    return () => {
      dispatch(clearFeed())
    }
  }, [dispatch])


  useEffect(() => {
    if (!hasNext || isFirstLoading || isLoadingMore) return
    const currentTrigger = triggerRef.current

    const observer = new IntersectionObserver(
      (entries) => {

        const firstEntry = entries[0]
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
      { threshold: 0, rootMargin: '300px' }
    )

    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }

    return () => {
      if (currentTrigger) {
        observer.unobserve(currentTrigger)
      }
    }
  }, [hasNext, isFirstLoading, isLoadingMore, dispatch])


  if (isFirstLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    )
  }


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

      <Box>
        {loadedPosts.map((post) => (
          <PostFeed key={post.id} post={post} />
        ))}
      </Box>


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

        {isLoadingMore && <CircularProgress size={24} />}


        {!hasNext && loadedPosts.length > 0 && (
          <Typography variant="body2" color="text.secondary">
            No more posts to show
          </Typography>
        )}
      </Box>
    </Container>
  )
}

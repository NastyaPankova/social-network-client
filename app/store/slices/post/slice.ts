import { createSlice } from '@reduxjs/toolkit'
import { initialState } from '~/store/slices/post/initialState'
import { getLimitPosts, toggleLikePost } from '~/store/slices/post/thunks'

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearFeed: (state) => {
      state.posts = []
      state.cursor = null
      state.hasNest = true
      state.isLoadingPosts = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLimitPosts.pending, (state, action) => {
        const isFirstPage = !action.meta.arg

        if (!isFirstPage) {
          state.isLoadingPosts = true
        }
      })
      .addCase(getLimitPosts.fulfilled, (state, action) => {
        state.isLoadingPosts = false
        const isFirstPage = !action.meta.arg

        if (isFirstPage) {
          state.posts = action.payload.posts
        } else {
          state.posts.push(...action.payload.posts)
        }

        state.cursor = action.payload.pagingData.cursor || null
        state.hasNest = action.payload.pagingData.nextPage
      })
      .addCase(getLimitPosts.rejected, (state) => {
        state.isLoadingPosts = false
      })
      .addCase(toggleLikePost.pending, (state, action) => {
        const postId = action.meta.arg
        const post = state.posts.find((post) => post.id === postId)

        if (post) {
          post.isLiked = !post.isLiked
          post.likesCount = post.isLiked
            ? post.likesCount + 1
            : post.likesCount - 1
        }
      })

      .addCase(toggleLikePost.fulfilled, (state, action) => {
        const post = state.posts.find(
          (post) => post.id === action.payload.postId
        )
        if (post) {
          post.likesCount = action.payload.likesCount
        }
      })

      .addCase(toggleLikePost.rejected, (state, action) => {
        const postId = action.meta.arg
        const post = state.posts.find((post) => post.id === postId)

        if (post) {
          post.isLiked = !post.isLiked
          post.likesCount = post.isLiked
            ? post.likesCount + 1
            : post.likesCount - 1
        }
      })
  },
})

export const { clearFeed } = postsSlice.actions
export default postsSlice.reducer

import { createAsyncThunk } from '@reduxjs/toolkit'
import PostService from '~/services/postService'

export const getLimitPosts = createAsyncThunk(
  'post/getLimitPosts',
  async (cursor: string | undefined, { rejectWithValue }) => {
    try {
      const response = await PostService.getLimitPosts(cursor)
      return response.data
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Loading failed')
    }
  }
)
export const toggleLikePost = createAsyncThunk(
  'post/toggleLike',
  async (postId: number, { rejectWithValue }) => {
    try {
      const response = await PostService.toggleLike(postId)

      return { postId, likesCount: response.data.likesCount }
    } catch (err: any) {
      return rejectWithValue(postId)
    }
  }
)

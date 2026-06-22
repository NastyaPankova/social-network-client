import type { PostState } from '~/store/slices/post/types'

export const initialState: PostState = {
  posts: [],
  cursor: null,
  hasNest: true,
  isLoadingPosts: false,
}

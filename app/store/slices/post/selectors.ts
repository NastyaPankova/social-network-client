import type { RootState } from '~/store/store'
export const getLoadedPosts = (state: RootState) => state.post.posts
export const getCursor = (state: RootState) => state.post.cursor
export const next = (state: RootState) => state.post.hasNest
export const loadingPosts = (state: RootState) => state.post.isLoadingPosts

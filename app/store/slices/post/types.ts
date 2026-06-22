export interface PostState {
  posts: IPost[]
  cursor: string | null
  hasNest: boolean
  isLoadingPosts: boolean
}

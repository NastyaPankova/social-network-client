import type { IPagingData } from '~/interfaces/IPagingData'

export interface ILimitPosts {
  posts: IPost[]
  pagingData: IPagingData
}

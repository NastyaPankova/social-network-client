import api from '~/api'
import type { AxiosResponse } from 'axios'
import type { ILimitPosts } from '~/interfaces/ILimitPosts'

export default class PostService {
  static async getLimitPosts(
    cursor?: string
  ): Promise<AxiosResponse<ILimitPosts>> {
    const url = cursor ? `/post?cursor=${encodeURIComponent(cursor)}` : '/post'
    const response = await api.get<ILimitPosts>(url)
    return response
  }

  static async toggleLike(
    postId: number
  ): Promise<AxiosResponse<{ likesCount: number }>> {
    return await api.post<{ likesCount: number }>(`/like/${postId}`)
  }
}

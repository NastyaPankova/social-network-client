//todo
//нужен ли   authorId: number?
interface IPost {
  id: number
  createdAt: Date
  title: string
  content: string
  media: string
  authorId: number
  likesCount: number
  author: { name: string | 'anonymous' }
  isLiked: boolean
}

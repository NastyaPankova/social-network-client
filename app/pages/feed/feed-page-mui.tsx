import PostMUIFeed from '~/components/Post/PostMUI'
import { postsExamplesMUI } from '~/app/data/postExamplesMUI'

export function FeedPageMUI() {
  return (
    <div>
      {postsExamplesMUI.map((post) => (
        <PostMUIFeed
          title={post.title}
          date={post.date}
          content={post.content}
          author={post.author}
          key={post.id}
        />
      ))}
    </div>
  )
}

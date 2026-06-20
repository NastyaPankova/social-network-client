import { postsExamples } from '~/data/postExamples'
import PostFeed from '~/components/post/postFeed'

export function FeedPage() {
  return (
    <div>
      {postsExamples.map((post) => (
        <PostFeed
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

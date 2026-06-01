import { PostFeed } from '~/components/Post/Post'

import { postsExamples } from '~/app/data/postExamples'

export function FeedPage() {
  return (
    <div>
       {postsExamples.map((post) => (
        <PostFeed
          title={post.title}
          content={post.content}
          author={post.author}
          key={post.id}
        />
      ))}
    </div>
  )
}

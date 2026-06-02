import { PostFeed } from '~/toDelete/Post'

import { postsExamples } from '~/toDelete/postExamples'

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

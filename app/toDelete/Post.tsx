import { ButtonLikes } from '~/toDelete/ButtonLikes'

export function PostFeed({ title, content, author }: postInterface) {
  //лучше использовать <div> блоки или специализированные?
  return (
    <div>
      <header>{title}</header>
      <article>{content}</article>
      <footer>{author}</footer>
      <div>
        <ButtonLikes />
      </div>
      <div>-----------------</div>
    </div>
  )
}

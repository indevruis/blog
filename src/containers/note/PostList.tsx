import Link from 'next/link'
import { Post } from '@/contentlayer/generated'
import { format, parseISO } from 'date-fns'

const PostList = ({ post, key }: { post: Post; key: number }) => {
  return (
    <Link href={`/${post._raw.flattenedPath}`} key={key}>
      <li className="flex justify-between py-1 my-1">
        <div>
          <h1>{post.title}</h1>
          <p className="group-hover:block text-[12px]">{post.description}</p>
        </div>
        <time dateTime={post.createdAt} className="pr-3 text-[13px] pt-1">
          {format(parseISO(post.createdAt), 'MM.dd')}
        </time>
      </li>
    </Link>
  )
}

export default PostList

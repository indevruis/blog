import Link from 'next/link'
import { Post } from '@/contentlayer/generated'
import { format, parseISO } from 'date-fns'

const PostList = ({ post }: { post: Post }) => {
  return (
    <ul className="w-full">
      <Link href={`/${post._raw.flattenedPath}`}>
        <li className="flex justify-between py-1 my-1">
          <div>
            <div>{post.title}</div>
            <div className="text-[14px]">
              <div className="group-hover:block">{post.description}</div>
            </div>
          </div>
          <div className="pr-3 text-[13px] pt-1">
            <time dateTime={post.createdAt} className="text-gray-600">
              {format(parseISO(post.createdAt), 'MM.dd')}
            </time>
          </div>
        </li>
      </Link>
    </ul>
  )
}

export default PostList

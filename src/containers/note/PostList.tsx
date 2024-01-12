import Link from 'next/link'
import { Post } from '@/contentlayer/generated'
import dayjs from 'dayjs'

const PostList = ({ post }: { post: Post }) => {
  const date = dayjs(post.createdAt).format('YYYY.MM.DD')
  return (
    <ul className="w-full">
      <Link href={`/note/${post._raw.flattenedPath}`}>
        <li className="flex justify-between py-1 my-1">
          <div>
            <div>{post.title}</div>
            <div className="text-[14px]">
              <div className="group-hover:block">{post.description}</div>
            </div>
          </div>
          <div className="pr-3 text-[14px] pt-1">{date.slice(5)}</div>
        </li>
      </Link>
    </ul>
  )
}

export default PostList

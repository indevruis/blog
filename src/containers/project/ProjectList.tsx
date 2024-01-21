import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/contentlayer/generated'
import { format, parseISO } from 'date-fns'

const ProjectList = ({ post }: { post: Post }) => {
  return (
    <Link href={`/${post._raw.flattenedPath}`}>
      <li className="border w-[310px] p-5 rounded-lg">
        <div className="w-full h-full flex flex-col justify-between">
          <Image
            src={post.thumbnail!}
            alt="project image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="rounded"
          />
          <div>
            <h1 className="mt-2 font-semibold text-[16px]">{post.title}</h1>
            <p className="leading-5 whitespace-pre-line text-[13px]">
              {post.description}
            </p>
            <time className="text-[12px] text-gray-600">
              {format(parseISO(post.createdAt), 'yyyy.MM.dd')}
            </time>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default ProjectList

import { allPosts } from '@/contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import Mdx from '@/containers/note/Mdx'

interface Params {
  params: {
    slug: string
  }
}

const NotePost = async ({ params }: Params) => {
  const post = await getNowPost({ params })
  if (!post) {
    notFound()
  }
  return (
    <div>
      <h1 className="text-30px">{post!.title}</h1>
      <time dateTime={post.createdAt} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.createdAt), 'LLLL d, yyyy')}
      </time>
      <div className='my-5'>{post!.thumbnail}</div>
      <div>
      <article className='prose prose-stone prose-sm max-w-none'>
        <Mdx postCode={post.body.code} />
      </article>
      </div>
    </div>
  )
}

export default NotePost

export const getNowPost = async ({ params }: Params) => {
  const post = allPosts.find((post) => {
    return params.slug[0] === post.slug.substring(12)
  })
  
  return post ?? null
}

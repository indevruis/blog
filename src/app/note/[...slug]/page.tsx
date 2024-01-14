import dayjs from 'dayjs'
import { allPosts } from '@/contentlayer/generated'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

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
      <time>{dayjs(post!.createdAt).format('YYYY.MM.DD')}</time>
      <div className='my-5'>{post!.thumbnail}</div>
      <div>
      <article className='prose prose-stone prose-sm max-w-none'>
        <MDXRemote source={post.body.html}/>
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

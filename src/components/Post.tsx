import { allPosts } from '@/contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import Mdx from '@/containers/note/Mdx'
import Image from 'next/image'

interface Params {
  params: {
    slug: string
  }
  subNum: number
}

const Post = async ({ params, subNum }: Params) => {
  const post = await getPost({ params, subNum })
  if (!post) {
    notFound()
  }
  return (
    <>
      <h1 className="text-30px">{post!.title}</h1>
      <time
        dateTime={post.createdAt}
        className="mb-2 block text-xs text-gray-600"
      >
        {format(parseISO(post.createdAt), 'LLLL d, yyyy')}
      </time>
      <p className="text-xs mt-3 mb-6">{post.description}</p>
      {post.thumbnail && (
        <Image
          src={post.thumbnail!}
          alt="project image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="rounded-lg my-5"
        />
      )}
      <article className="prose prose-stone prose-sm max-w-none dark:prose-invert">
        <Mdx postCode={post.body.code} />
      </article>
    </>
  )
}

export default Post

const getPost = async ({ params, subNum }: Params) => {
  const post = allPosts.find((post) => {
    return params.slug[0] === post.slug.substring(subNum)
  })

  return post ?? null
}

import dayjs from 'dayjs'
import { allPosts } from '@/contentlayer/generated'
import { notFound } from 'next/navigation'

interface Params {
  params: {
    post: string[]
  }
}

const NotePost = async ({ params }: Params) => {
  const post = await getNowPost({ params })

  if (!post) {
    notFound()
  }

  return (
    <div>
      <h3 className="text-[30px]">{post!.title}</h3>
      <time>{dayjs(post!.createdAt).format('YYYY.MM.DD')}</time>
      <div>{post!.hashtage}</div>
      <div>{post!.thumbnail}</div>
      <div dangerouslySetInnerHTML={{ __html: post!.body.html }}></div>
    </div>
  )
}

export default NotePost

const getNowPost = async ({ params }: Params) => {
  const nowParams = Object.values(params.post).join('/')
  const post = allPosts.find((params) => {
    return params._raw.flattenedPath === nowParams
  })

  return post
}

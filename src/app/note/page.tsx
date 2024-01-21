import PageHeader from '@/components/PageHeader'
import { Post, allPosts } from '@/contentlayer/generated'
import PostList from '@/containers/note/PostList'
import { compareDesc } from 'date-fns'

type PostsByYear = Record<string, Post[]>

const Note = async () => {
  const posts = await getPost('note')
  const notePost = posts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  )
  const postsByYear: PostsByYear = {}
  notePost.forEach((post) => {
    const year = post.createdAt.substring(0, 4)
    if (!postsByYear[year]) {
      postsByYear[year] = []
    }
    postsByYear[year].push(post)
  })
  return (
    <>
      <PageHeader title="Note" content="" />
      <section className="border-b">
        {Object.keys(postsByYear)
          .reverse()
          .map((year, i) => (
            <div className="flex border-t py-1" key={i}>
              <p className="mr-10 py-3 text-[14px]">{year}</p>
              <div className="flex flex-col w-full">
                <ul className="w-full">
                  {notePost.map(
                    (post, i) =>
                      year === post.createdAt.substring(0, 4) && (
                        <PostList post={post} key={i} />
                      ),
                  )}
                </ul>
              </div>
            </div>
          ))}
      </section>
    </>
  )
}

export default Note

export const getPost = async (dir: string) => {
  const post = allPosts.filter((post) => {
    return post._raw.sourceFileDir === dir
  })

  return post ?? null
}

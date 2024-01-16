import PageHeader from '@/components/PageHeader'
import { Post, allPosts } from '@/contentlayer/generated'
import PostList from '@/containers/note/PostList'
import { compareDesc } from 'date-fns'

type PostsByYear = Record<string, Post[]>

const Note = () => {
  const posts = allPosts.sort(
    (a: Post, b: Post) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
  const postsByYear: PostsByYear = {}
  posts.forEach((post) => {
    const year = post.createdAt.substring(0,4)
    if (!postsByYear[year]) {
      postsByYear[year] = []
    }
    postsByYear[year].push(post)
  })
  return (
    <div>
      <PageHeader title="Note" content="" />
      <section className="border-b">
        {Object.keys(postsByYear)
          .reverse()
          .map((year, i) => (
            <div className="flex border-t py-1" key={i}>
              <p className="mr-10 py-3 text-[14px]">{year}</p>
              <div className="flex flex-col w-full">
                {posts.map(
                  (post, i) =>
                    year === post.createdAt.substring(0,4) && (
                      <PostList post={post} key={i} />
                    ),
                )}
              </div>
            </div>
          ))}
      </section>
    </div>
  )
}

export default Note

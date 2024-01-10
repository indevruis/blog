import PageHeader from '@/components/PageHeader'
import { Post, allPosts } from '@/contentlayer/generated'
import PostList from '@/containers/note/PostList'

type PostsByYear = Record<string, Post[]>

const Note = () => {
  const posts = allPosts.sort(
    (a: Post, b: Post) =>
      Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)),
  )

  const postsByYear: PostsByYear = {}
  posts.forEach((post) => {
    const year = post._id.substring(5, 9)
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
                    year === post._id.substring(5, 9) && (
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

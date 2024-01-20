import PageHeader from '@/components/PageHeader'
import ProjectList from '@/containers/project/ProjectList'
import { Post } from '@/contentlayer/generated'
import { getPost } from '../note/page'
import { compareDesc } from 'date-fns'

const Project = async () => {
  const posts = await getPost('project')
  const projectPost = posts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  )
  return (
    <div>
      <PageHeader title="Project" content="" />
      <section className="w-full">
        <ul className="w-full grid grid-cols-2 gap-5">
          {projectPost.map((post, i) => (
            <ProjectList post={post} />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Project

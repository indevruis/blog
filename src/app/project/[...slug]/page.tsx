import { Post } from '@/components'

interface Params {
  params: {
    slug: string
  }
}

const ProjectPost = ({ params }: Params) => {
  return Post({ params, subNum: 15 })
}
export default ProjectPost

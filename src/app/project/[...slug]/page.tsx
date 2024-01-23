import { Post } from '@/components'
import Toc from '@/components/Toc'

interface Params {
  params: {
    slug: string
  }
}

const ProjectPost = ({ params }: Params) => {
  return (
    <>
      <Toc />
      <Post params={params} subNum={15} />
    </>
  )
}
export default ProjectPost

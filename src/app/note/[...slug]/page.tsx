import { Post } from '@/components'
import Toc from '@/components/Toc'

interface Params {
  params: {
    slug: string
  }
}

const NotePost = ({ params }: Params) => {
  return (
    <div>
      <Toc />
      <Post params={params} subNum={12} />
    </div>
  )
}
export default NotePost

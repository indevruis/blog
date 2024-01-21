import { Post } from '@/components'

interface Params {
  params: {
    slug: string
  }
}

const NotePost = ({ params }: Params) => {
  return Post({ params, subNum: 12 })
}
export default NotePost

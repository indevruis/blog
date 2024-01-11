'use client'

import { NotePostAtom } from '@/states/NotePostAtom'
import { useRecoilValue } from 'recoil'

const NotePost = () => {
  const notePost = useRecoilValue(NotePostAtom)
  return (
    <div>
      <h1>{notePost.title}</h1>
      <p>{notePost.description}</p>
    </div>
  )
}

export default NotePost

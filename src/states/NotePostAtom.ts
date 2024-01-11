import { atom } from 'recoil'
import { Post } from '@/contentlayer/generated'

export const NotePostAtom = atom<Post>({
  key: 'NotePostAtom',
})

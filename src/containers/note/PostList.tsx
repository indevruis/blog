'use client'

import Link from 'next/link'
import { Post } from '@/contentlayer/generated'
import dayjs from 'dayjs'
import { useSetRecoilState } from 'recoil'
import { NotePostAtom } from '@/states/NotePostAtom'

const PostList = ({ post }: { post: Post }) => {
  const setNotePost = useSetRecoilState(NotePostAtom)
  const date = dayjs(post.createdAt).format('YYYY.MM.DD')
  const onClickLink = () => {
    setNotePost(post)
  }
  return (
    <ul className="w-full">
      <Link href={`/${post._raw.flattenedPath}`} passHref onClick={onClickLink}>
        <li className="flex justify-between py-1 my-1">
          <div>
            <div>{post.title}</div>
            <div className="text-[14px]">
              <div className="group-hover:block">{post.description}</div>
            </div>
          </div>
          <div className="pr-3 text-[14px] pt-1">{date.slice(5)}</div>
        </li>
      </Link>
    </ul>
  )
}

export default PostList

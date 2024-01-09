import { navlinks } from '@/contants'
import Link from 'next/link'

const Category = () => {
  return (
    <div className="flex">
      나의 기록
      <div className="ml-5">
        {navlinks.slice(1, 3).map((nav) => (
          <div className="flex">
            <Link href={nav.link}>{nav.title}</Link>
            <p className="ml-3">{nav.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category

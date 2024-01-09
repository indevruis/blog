import Link from 'next/link'
import { navlinks } from '@/contants'

const Navbar = () => {
  return (
    <nav className="pt-[70px] my-[10px] py-[10px] flex justify-between">
      <div>
        {navlinks.slice(0, 3).map((nav) => (
          <Link href={nav.link} key={nav.title} className="mr-7">
            {nav.title}
          </Link>
        ))}
      </div>
      <div className="flex">
        <Link href={navlinks.at(-1)!.link} key={navlinks.at(-1)!.title}>
          {navlinks.at(-1)!.title}
        </Link>
        <div className="pl-7 pr-4">🌞</div>
      </div>
    </nav>
  )
}

export default Navbar

'use client'

import Link from 'next/link'
import { navlinks } from '@/contants'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { LuMoon } from 'react-icons/lu'
import { FiSun } from 'react-icons/fi'

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
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const ChangeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <button onClick={() => ChangeTheme()} className="mt-0.5 px-5">
      {theme === 'dark' ? <LuMoon /> : <FiSun />}
    </button>
  )
}

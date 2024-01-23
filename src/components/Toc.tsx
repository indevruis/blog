'use client'

import { getIntersectionObserver } from '@/lib/observer'
import { useEffect, useState } from 'react'

const Toc = () => {
  const [currentHeader, setcurrentHeader] = useState<string>('')
  const [headers, setheaders] = useState<Element[]>([])

  useEffect(() => {
    const observer = getIntersectionObserver(setcurrentHeader)
    const headingElements = Array.from(document.querySelectorAll('h2, h3'))

    setheaders(headingElements)

    headingElements.map((header) => {
      observer.observe(header)
    })
  }, [])

  return (
    <div className="fixed right-[10vw] text-light-gray text-[15px] border-l pl-7 w-[200px]">
      <ul>
        {headers.map((header) => {
          return (
            <li key={header.id}>
              <a
                href={`#${header.id}`}
                className={currentHeader === header.id ? 'active' : ''}
              >
                {header.textContent}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Toc

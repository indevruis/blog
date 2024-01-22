'use client'

import { RecoilRoot } from 'recoil'
import { Footer } from '@/components'
import '@/styles/globals.css'

const RecoilRootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <div className="flex justify-center">
        <div className="w-[650px] h-screen flex flex-col justify-between">
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </RecoilRoot>
  )
}

export default RecoilRootProvider

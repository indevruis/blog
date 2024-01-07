import type { Metadata } from 'next'
import RecoilRootProvider from '@/states/recoilRootProvider'

export const metadata: Metadata = {
  title: 'indevruis blog',
  description: 'next.js + typescript + tailwindcss blog starter',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  )
}

export default RootLayout

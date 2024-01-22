import type { Metadata } from 'next'
import RecoilRootProvider from '@/states/recoilRootProvider'
import { Navbar } from '../components'
import { ThemeProvider } from './ThemeProviders'

export const metadata: Metadata = {
  title: 'indevruis blog',
  description: 'next.js + typescript + tailwindcss blog starter',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <RecoilRootProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </RecoilRootProvider>
      </body>
    </html>
  )
}

export default RootLayout

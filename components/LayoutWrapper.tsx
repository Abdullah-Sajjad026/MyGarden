import { ReactNode } from 'react'
import { Outfit } from '@next/font/google'
import { MAIN_CONTENT_MIN_HEIGHT } from '@/constants'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: ReactNode
}

const outfit = Outfit({
  subsets: ['latin'],
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className={`${outfit.className} font-sans`}>
      <Header />
      <SectionContainer>
        <div className="flex flex-col justify-between">
          <main style={{ minHeight: MAIN_CONTENT_MIN_HEIGHT }}>{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper

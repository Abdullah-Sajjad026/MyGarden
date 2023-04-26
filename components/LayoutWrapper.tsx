import { ReactNode, useState } from 'react'
import { Outfit } from '@next/font/google'
import { MAIN_CONTENT_MIN_HEIGHT } from '@/constants'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Header from './Header'
import MobileNav from './MobileNav'

interface Props {
  children: ReactNode
}

const outfit = Outfit({
  subsets: ['latin'],
})

const LayoutWrapper = ({ children }: Props) => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const onToggleMobileNav = () => setShowMobileNav((prev) => !prev)

  return (
    <div className={`${outfit.className} font-sans`}>
      <MobileNav showNav={showMobileNav} onToggleNav={onToggleMobileNav} />
      <Header onToggleNav={onToggleMobileNav} />
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

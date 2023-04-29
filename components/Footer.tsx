// import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { formatDate } from 'pliny/utils/formatDate'

export default function Footer() {
  const today = new Date()

  const dayName = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesay',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  }[today.getDay()]

  return (
    <footer>
      <div className="mb-6 mt-12 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex flex-col items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 sm:flex-row">
          <div>{siteMetadata.author}</div>
          <div className="hidden sm:inline-block">{` • `}</div>
          <div>{`© ${today.getFullYear()}`}</div>
          <div className="hidden sm:inline-block">{` • `}</div>
          <div>Have a good {dayName}</div>
        </div>
        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div> */}
      </div>
    </footer>
  )
}

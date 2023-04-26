import siteMetadata from '@/data/siteMetadata'
import { Analytics } from 'pliny/analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

export default function MyAnalytics() {
  return (
    <>
      <Analytics analyticsConfig={siteMetadata.analytics} />
      <VercelAnalytics />
    </>
  )
}

import useSWR from 'swr'
import Image from './Image'
import Link from './Link'
import { fetcher, capitalize } from '@/utils'

const ProjectCard = ({ title, description, imgSrc, url, repo, builtWith }) => {
  const { data } = useSWR(`/api/github?repo=${repo}`, fetcher)
  const repository = data?.repository
  const href = repository?.url || url

  // const href = url

  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`flex h-full flex-col overflow-hidden rounded-md border border-gray-300 border-opacity-60 hover:border-gray-400 dark:border-gray-500 dark:hover:border-gray-400`}
      >
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-60"
          width={1088}
          height={612}
        />
        <div className="flex grow flex-col justify-between space-y-8 p-6">
          <div className="space-y-3">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  <span className="umami--click--project-title-link">{title}</span>
                </Link>
              ) : (
                title
              )}
            </h2>
            <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap space-x-1.5">
              <span className="shrink-0">Built with:</span>
              {builtWith?.map((tool, index) => {
                return (
                  <span key={index} className="font-semibold text-gray-500 dark:text-gray-400">
                    {capitalize(tool)}
                    {index !== builtWith.length - 1 && ','}
                  </span>
                )
              })}
            </div>
            {href && (
              <Link
                href={href}
                className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Link to ${title}`}
              >
                Learn more &rarr;
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

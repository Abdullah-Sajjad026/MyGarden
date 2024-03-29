import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Works
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            These are some of my works. I am always open to new ideas and projects.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                imgSrc={p.imgSrc}
                url={p.url}
                builtWith={p.builtWith}
                repo={''}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

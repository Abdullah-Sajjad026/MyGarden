import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import type {MySkill} from '@/types'

export default function Skills() {
  const skillsData : {frontend: MySkill[], backend: MySkill[], others: MySkill[]} = {
    frontend: [
      { title: 'React.js', bgColor: 'rgb(83, 193, 222)', textColor: 'white' },
      { title: 'Next.js', bgColor: 'rgb(0,0,0)', textColor: 'white' },
      { title: 'Typescript', bgColor: 'rgb(25, 118, 210)', textColor: 'white' },
      { title: 'Javascript', bgColor: 'rgb(240, 219, 79)', textColor: 'black' },
      { title: 'Redux.js', bgColor: 'rgb(114, 72, 182)', textColor: 'white' },
      { title: 'Chakra UI', bgColor: 'rgb(65, 200, 192)', textColor: 'white' },
      { title: 'Tailwind CSS', bgColor: 'rgb(57, 189, 248)', textColor: 'white' },
      { title: 'Sass/SCSS', bgColor: 'rgb(204, 102, 153)', textColor: 'white' },
      { title: 'Bootstrap', bgColor: 'rgb(103, 58, 183)', textColor: 'white' },
      { title: 'CSS3', bgColor: 'rgb(33, 150, 243)', textColor: 'white' },
      { title: 'HTML5', bgColor: 'rgb(213, 83, 44)', textColor: 'white' },
    ],
    backend: [
      { title: 'Node.js', bgColor: 'rgb(110, 164, 95)', textColor: 'white' },
      { title: 'Express.js', bgColor: 'rgb(0, 0, 0)', textColor: 'white' },
      { title: 'MongoDB', bgColor: 'rgb(0, 241, 101)', textColor: 'rgb(0, 24, 41)' },
      { title: 'Prisma ORM', bgColor: 'rgb(12, 50, 73)', textColor: 'white' },
    ],
    others: [
      { title: 'Strapi', bgColor: 'rgb(73, 69, 255)', textColor: 'white' },
      { title: 'Contentful', bgColor: 'rgb(139, 202, 255)', textColor: 'white' },
      { title: 'Git', bgColor: 'rgb(245, 77, 39)', textColor: 'white' },
    ],
  }

  return (
    <>
      <PageSEO title={`Skills - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Skills
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My Skills at a Glance
          </p>
        </div>
        
        <SkillsSection title="Frontend Web Development" skills={skillsData.frontend} />
        <SkillsSection title="Backend Web Development" skills={skillsData.backend} />
        <SkillsSection title="More" skills={skillsData.others} />

      </div>
    </>
  )
}


function SkillsSection({title, skills}: {title: string, skills: MySkill[]}) {
    return (
<div className="container py-12">
          <h3 className="mb-6 sm:mb-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
           {title}
          </h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
    )
}

function SkillCard({ title, bgColor, textColor }: MySkill) {
  return (
    <div
      className={`rounded-lg p-3 text-center text-xl font-bold shadow-md shadow-[${bgColor}] bg-[${bgColor}] text-[${textColor}] md:text-2xl`}
      style={{ background: bgColor, color: textColor }}
    >
      {title}
    </div>
  )
}

import { genPageMetadata } from '@data/seo'
import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('@/components/projects'));

export const metadata = genPageMetadata({ title: 'Projects' })

export default function ProjectsPage() {
  return (
    <>
      <div className=" dark:divide-gray-700">
        <Projects />
      </div>
    </>
  )
}

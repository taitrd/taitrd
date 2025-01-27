"use client";
import { cards, fadeInLeft } from "@/lib/motion/variants";
import projectsData from "@data/projectsData";
import dynamic from "next/dynamic";
const MotionHeading = dynamic(() => import("../motions/Heading"));
const MotionParagraph = dynamic(() => import("../motions/Paragraph"));
const MotionBlock = dynamic(() => import("../motions/Block"));
const Card = dynamic(() => import("@/components/Card"));

const Projects = () => {
  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <MotionHeading
          variants={fadeInLeft}
          className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
        >
          Projects
        </MotionHeading>
        <MotionParagraph className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Dominant products that he worked with colleagues and independence.
        </MotionParagraph>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d, k) => (
            <MotionBlock
              key={k}
              variants={cards}
              transition={{ duration: 0.5, delay: 0.1 * k }}
              className="p-4 md:w-1/2 flex"
            >
              <Card
                index={k}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                tags={d.tags}
              />
            </MotionBlock>
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;

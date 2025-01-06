import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import projects from "@data/projectsData";
import Link from "next/link";
import { Button } from "./ui/button";
export default function Projects() {
  return (
    <Card className="bg-white dark:bg-slate-700  border-0">
      <div className="flex items-center justify-between pr-6">
        <CardHeader>
          <CardTitle>Featured Projects</CardTitle>
        </CardHeader>
        <Link href="/projects"><Button variant='link'>See projects</Button></Link>
      </div>
      <CardContent>
        <div className="space-y-6">
          {projects.slice(0, 3).map((project, index) => (
            <div className="p-0" key={index}>
              <Link
                href={project.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex space-x-4 flex-col md:flex-row">
                  <div className="flex-grow lg:w-2/3">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {/* <Button variant='outline' asChild>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button> */}
                  </div>
                  <div className="relative h-48 md:h-auto lg:w-1/3">
                    {project.imgSrc && (
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        className="object-cover rounded-lg"
                        layout='fill'
                        
                      />
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

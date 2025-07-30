import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  { category: "Backend", items: ["PHP", "Laravel", "Node.js", "Nest.js"] },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Serverless"] },
  { category: "DevOps", items: ["Git-based", "Docker", "CI/CD"] },
];

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div key={skill.category}>
          <h3 className="font-semibold mb-2">{skill.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

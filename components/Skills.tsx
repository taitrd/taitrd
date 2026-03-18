import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Nest.js", "PHP", "Laravel", "MySQL", "MongoDb"],
  },
  {
    category: "Cloud",
    items: [
      "GCP",
      "Firebase",
      "Cloud Functions",
      "Cloud Run",
      "AWS",
      "EC2",
      "S3",
      "DynamoDb",
    ],
    colspan: true,
  },
  {
    category: "DevOps",
    items: ["Git-based", "Docker", "Github CI/CD", "Gitlab CI/CD"],
  },
  {
    category: "AI",
    items: ["v0", "Antigravity", "Github Copilot"],
  },
];

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div key={skill.category} className={cn(skill.colspan && `col-span-2`)}>
          <h3 className="font-semibold mb-2">{skill.category}</h3>
          <div className="flex flex-wrap gap-2 flex-grow-1">
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

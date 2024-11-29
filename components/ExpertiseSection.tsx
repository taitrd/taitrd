import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skills } from "./Skills";

interface ExpertiseProps {
  title: string;
  items?: string[];
}

export function ExpertiseSection({ title, items = ["HEALTHTECH", "E-COMMERCE", "IOT", "SAAS", "MANUFACTURE"] }: ExpertiseProps) {
  return (
    <Card className="shadow-lg border-0 bg-white dark:bg-slate-700 pt-4">
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="space-y-3 w-4/12">
            <h3 className="text-nowrap">{title}</h3>
            {items.map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span className="font-mono text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="w-8/12">
            <Skills />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import Image from "next/legacy/image";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CertificationGrid() {
  return (
    <Card className="bg-white dark:bg-slate-700 border-0">
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className=" bg-white dark:bg-slate-700 rounded-xl ">
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="col-start-2">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="AWS Data Analytics"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="AWS Solutions Architect"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="GitHub Arctic Code Vault Contributor"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="AWS Security"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="GitHub Pro"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="AWS Developer Associate"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div className="col-start-2">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="GitHub Star"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <p>
              I specialize in serverless solutions and event-driven
              architectures.
            </p>
            <p>
              I design & build cloud-native solutions focusing on security,
              performance and cost-effectiveness.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">My expertise spans</h3>
              <div className="space-y-2">
                {[
                  "ARCHITECTURE",
                  "ENGINEERING",
                  "SECURITY",
                  "INFRASTRUCTURE",
                  "OPERATIONS",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500 dark:text-green-400" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

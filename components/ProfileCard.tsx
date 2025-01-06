import Image from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";

const ProfileCard = () => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-700 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
            <Image
              src="/avatar.webp"
              alt="Profile"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Software Engineer</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Based in Ho Chi Minh, Viet Nam
            </p>
          </div>
        </div>
        <p className="mt-4 text-lg">
          Architecture is key, software engineer by choice.
        </p>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {"I've"} been crafting solutions for nearly one decade, working with
          clients, from startups to enterprises, achieving experience across
          various domains.
        </p>
      </CardContent>
    </Card>
  );
};
export default ProfileCard;

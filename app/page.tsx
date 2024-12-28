import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpertiseSection } from "@components/ExpertiseSection";
import { SocialLinks } from "@components/SocialLinks";
import { CommunicatorCard } from "@components/CommunicatorCard";
import { Projects } from "@components/Projects";
import { LatestBlogs } from "@components/LatestBlogs";
import { ContributionActivity } from "@components/ContributionActivity";
import getBlogs from "@data/blogs";
import HomeProvider from "@/contexts/HomeProvider";
const blogs = getBlogs;
export default function Home() {
  const blogPosts = blogs
    .map((i) => i.content)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  return (
    <HomeProvider blogs={blogPosts}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2">
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
                {"I've"} been crafting solutions for nearly one decade, working
                with clients, from startups to enterprises, achieving experience
                across various domains.
              </p>
            </CardContent>
          </Card>
          <ExpertiseSection title="Industries & Skills" />
          <ContributionActivity />
          <Projects />
        </div>

        {/* Right Column */}
        <div className="space-y-6 ">
          <CommunicatorCard />
          {/* <CertificationGrid /> */}
          <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Lifelong Learner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  {"I'm"} naturally curious and an explorer at heart, always
                  eager for new challenges and enthusiastic about learning &
                  building things - both tech and non-tech.
                </p>
                <p>
                  Able to grasp new concepts quickly, I remain humble, teachable
                  and open, fully aware {"there's"} always more to discover.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Find me on</CardTitle>
            </CardHeader>
            <CardContent>
              <SocialLinks />
            </CardContent>
          </Card>
          <LatestBlogs />
        </div>
      </div>
    </HomeProvider>
  );
}

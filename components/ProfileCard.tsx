'use client';
import Image from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInLeft } from "@/lib/motion/variants";
import dynamic from "next/dynamic";
import siteMetadata from '@/data/siteMetadata';
const MotionBlock = dynamic(() => import("./motions/Block"));

const ProfileCard = () => {
  return (
    <MotionBlock variants={fadeInLeft} >
      <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-700 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
              <Image
                src="/avatar.webp"
                alt={siteMetadata.title}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Software Engineer</h2>
              <p className="text-zinc-600 dark:text-zinc-300">
                Based in Ho Chi Minh, Viet Nam
              </p>
            </div>
          </div>
          <p className="mt-4 text-lg">
            Architecture is key, software engineer by choice.
          </p>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            {"I've"} been crafting solutions for nearly one decade, working with
            clients, from startups to enterprises, achieving experience across
            various domains.
          </p>
        </CardContent>
      </Card>
    </MotionBlock>
  );
};
export default ProfileCard;

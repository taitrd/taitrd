'use client';
import { fadeInRight } from "@/lib/motion/variants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
const MotionBlock = dynamic(() => import("./motions/Block"));

const SocialLinks = dynamic(() => import("@components/SocialLinks"));

const ContactCard = () => {
  return (
    <MotionBlock variants={{
      ...fadeInRight, animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration:   0.5,
          delay: 0.3,
        },
      }
    }} >
      <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Find me on</CardTitle>
        </CardHeader>
        <CardContent>
          <SocialLinks />
        </CardContent>
      </Card>
    </MotionBlock>
  );
};
export default ContactCard;

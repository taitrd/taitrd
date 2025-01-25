  'use client';
import { fadeInRight } from "@/lib/motion/variants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
const MotionBlock = dynamic(() => import("./motions/Block"));

const LifelongLearnerCard = () => {
  return (
    <MotionBlock variants={{
      ...fadeInRight, animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      }
    }} >
      <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Lifelong Learner</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
            <p>
              {"I'm"} naturally curious and an explorer at heart, always eager for
              new challenges and enthusiastic about learning & building things -
              both tech and non-tech.
            </p>
            <p>
              Able to grasp new concepts quickly, I remain humble, teachable and
              open, fully aware {"there's"} always more to discover.
            </p>
          </div>
        </CardContent>
      </Card>
    </MotionBlock>
  );
};
export default LifelongLearnerCard;

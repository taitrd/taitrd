import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LifelongLearnerCard = () => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Lifelong Learner</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
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
  );
};
export default LifelongLearnerCard;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";

const SocialLinks = dynamic(() => import("@components/SocialLinks"));

const ContactCard = () => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Find me on</CardTitle>
      </CardHeader>
      <CardContent>
        <SocialLinks />
      </CardContent>
    </Card>
  );
};
export default ContactCard;

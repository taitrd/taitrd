import dynamic from "next/dynamic";

const ExpertiseSection = dynamic(() => import("@components/ExpertiseSection"));
const ContributionActivity = dynamic(
  () => import("@components/ContributionActivity"),
  { ssr: false }
);
const LatestBlogs = dynamic(() => import("@components/LatestBlogs"));
const Projects = dynamic(() => import("@components/Projects"));
const CommunicatorCard = dynamic(() => import("@components/CommunicatorCard"));

const ProfileCard = dynamic(() => import("@components/ProfileCard"));
const ContactCard = dynamic(() => import("@components/ContactCard"));
const LifelongLearnerCard = dynamic(
  () => import("@components/LifelongLearnerCard")
);

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-6 lg:col-span-2">
        <ProfileCard />
        <ExpertiseSection title="Industries & Skills" />
        <ContributionActivity />
        <Projects />
      </div>

      <div className="space-y-6 ">
        <CommunicatorCard />
        {/* <CertificationGrid /> */}
        <LifelongLearnerCard />
        <ContactCard />
        <LatestBlogs />
      </div>
    </div>
  );
};
export default HomePage;

interface Project {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  imgSrc?: string;
}

const projectsData: Project[] = [
  {
    title: "Trucking Service Landing Page",
    description: `A landing page template for a trucking service featuring a hero video background.`,
    imgSrc: "/imgs/trucking.jpeg",
    tags: ["HTML", "TailwindCSS", "JavaScript"],
    href: "https://i4t-new-landing-page.vercel.app/",
  },
  {
    title: "H&H Auto Care Website",
    description: `A landing page for a local car service with a user-friendly CMS and layout editor.`,
    imgSrc: "/imgs/hhautocare.png",
    tags: ["Next.js", "React.js"],
    href: "https://hhautocare.com/",
  },
  {
    title: "Dtite Custom Website",
    description: `A landing page for a custom website featuring a user-friendly admin panel, headless CMS, and the latest technologies.`,
    imgSrc: "/imgs/dtite.png",
    tags: ["Laravel", "Next.js", "React.js"],
    href: "https://dtite.taitrd.com/",
  },
  {
    title: "Healthcare Custom Pricing Portal", 
    description: `A payment portal template built with Next.js, featuring AI support.`,
    imgSrc: "/imgs/dthc_cpp.png",
    tags: ["Next.js", "React.js", "TailwindCSS"],
    href: "https://pricingportal.taitrd.com/",
  },
  {
    title: "E-commerce Platform",
    description: `R&D and development of over 10 eCommerce website templates in one data center, featuring product search, cart & checkout, payments, shipping, and more.`,
    imgSrc: "/imgs/buysimvietnam.au.jpeg",
    tags: ["Laravel", "Next.js", "React.js"],
    href: "https://buysimvietnam.com.au/",
  },
  {
    title: "OpenAPI 3.0 Client Tool", 
    description: `Building an OpenAPI 3.0 client tool with AI support.`,
    imgSrc: "/imgs/openapi.png",
    tags: ["Next.js", "React.js", "LocalStorage", "ExportJson"],
    href: "https://openapi.taitrd.com/",
  },
];

export default projectsData;

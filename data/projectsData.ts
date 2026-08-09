interface Project {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  imgSrc?: string;
}

const projectsData: Project[] = [
  // {
  //   title: "DTwebta — SaaS Website Builder Platform",
  //   description: `A multi-tenant, block-based website builder with a headless CMS API, a CMS editor, an admin control plane, and a shared UI kit — built as a Turborepo monorepo.`,
  //   tags: ["Next.js", "NestJS", "TypeORM", "Turborepo", "TailwindCSS"],
  //   href: "https://dtwebta.com",
  // },
  {
    title: "DynTask — AI Project Planning",
    description: `Describe a project and let AI generate the plan: timeline, tasks, dependencies, and stakeholder reports, for event planning and construction teams.`,
    imgSrc: "/imgs/dyntask.png",
    tags: ["Next.js", "Redux Toolkit", "Supabase", "Drizzle ORM"],
    href: "https://dyntask.com",
  },
  {
    title: "Drill Test — E-Learning Practice App",
    description: `An online practice platform designed for lightning-fast recall and career exam prep`,
    imgSrc: "/imgs/drilltest.png",
    tags: ["Next.js", "Node.js", "GCP", "React Native"],
    href: "https://dtontap.com",
  },
  {
    title: "Next.js/ShadcnUI/TailwindCSS website templates",
    description: `A bundle of website templates built with Tailwind CSS and shadcn/ui, generated with AI assistance.`,
    imgSrc: "/imgs/Screenshot_26-3-2026_103128_ticketer.demo.dtwebta.com.jpeg",
    tags: ["Next.js", "Tailwind CSS", "ShadcnUI"],
    href: "https://shop.dtwebta.com",
  },
  // {
  //   title: "Tailwind CSS Component Library",
  //   description: `A bundle of templates built with Tailwind CSS and shadcn/ui, generated with AI assistance.`,
  //   imgSrc: "/imgs/dtui.taitrd.com.jpeg",
  //   tags: ["Tailwind CSS", "Shadcn/ui"],
  //   href: "https://dtui.taitrd.com/components?industry=heroes#concentric-gradient-hero",
  // },
  {
    title: "Trucking Service Landing Page",
    description: `A landing page template for a trucking service featuring a hero video background.`,
    imgSrc: "/imgs/trucking.jpeg",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
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
    description: `A landing page for a custom website featuring a user-friendly admin panel, headless CMS, and modern technologies.`,
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
  // {
  //   title: "E-commerce Platform",
  //   description: `R&D and development of over 10 eCommerce website templates in one data center, featuring product search, cart & checkout, payments, shipping, and more.`,
  //   imgSrc: "/imgs/buysimvietnam.au.jpeg",
  //   tags: ["Laravel", "Next.js", "React.js"],
  //   href: "https://buysimvietnam.com.au/",
  // },
  // {
  //   title: "OpenAPI 3.0 Client Tool",
  //   description: `Building an OpenAPI 3.0 client tool with AI support.`,
  //   imgSrc: "/imgs/openapi.png",
  //   tags: ["Next.js", "React.js", "LocalStorage", "ExportJson"],
  //   href: "https://openapi.taitrd.com/",
  // },
];

export default projectsData;

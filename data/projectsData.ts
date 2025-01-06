interface Project {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  imgSrc?: string;
}

const projectsData: Project[] = [
  {
    title: "H&H Auto Care",
    description: `Landing page of local car from CMS SaaS web-service with friendly CMS and layout editor`,
    imgSrc: "/imgs/hhautocare.png",
    tags: ["Next.js", "React.js"],
    href: "https://hhautocare.com/",
  },
  {
    title: "Dtite",
    description: `Landing page for a custom website with friendly admin, headless CMS and latest technologies`,
    imgSrc: "/imgs/dtite.png",
    tags: ["Laravel", "Next.js", "React.js"],
    href: "https://dtite.taitrd.com/",
  },
  {
    title: "HealthCare Custom Pricing Portal", 
    description: `A payment portal with AI supports`,
    imgSrc: "/imgs/dthc_cpp.png",
    tags: ["Next.js", "React.js", "TailwindCSS"],
    href: "https://pricingportal.taitrd.com/",
  },
  {
    title: "E-commerce shops platform",
    description: `R&D then built about 10+ website templates of eCommerce in one data center with searching products, cart & checkout, payments, shipping, etc features.`,
    imgSrc: "/imgs/buysimvietnam.au.jpeg",
    tags: ["Laravel", "Next.js", "React.js"],
    href: "https://buysimvietnam.com.au/",
  },
  {
    title: "OpenAPI 3.0 client tool UI", 
    description: `Building OpenAPI 3.0 client tool with AI supports`,
    imgSrc: "/imgs/openapi.png",
    tags: ["Next.js", "React.js", "LocalStorage", "ExportJson"],
    href: "https://openapi.taitrd.com/",
  },
];

export default projectsData;

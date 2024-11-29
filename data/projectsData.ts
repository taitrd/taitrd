interface Project {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  imgSrc?: string;
}

const projectsData: Project[] = [
  {
    title: "E-commerce shops platform",
    description: `R&D then built about 10+ website templates of eCommerce in one data center with searching products, cart & checkout, payments, shipping, etc features.`,
    imgSrc: "/imgs/buysimvietnam.au.jpeg",
    tags: ["Laravel", "NextJs", "ReactJs"],
    href: "https://buysimvietnam.com.au/",
  },
  {
    title: "H&H Auto Care",
    description: `Landing page of local car from CMS SaaS web-service with friendly CMS and layout editor`,
    imgSrc: "/imgs/hhautocare.png",
    tags: ["NextJs", "ReactJs"],
    href: "https://hhautocare.com/",
  },
  {
    title: "Dtite",
    description: `Landing page for a custom website with friendly admin, headless CMS and latest technologies`,
    imgSrc: "/imgs/dtite.png",
    tags: ["Laravel", "NextJs", "ReactJs"],
    href: "https://dtite.taitrd.com/",
  },
];

export default projectsData;

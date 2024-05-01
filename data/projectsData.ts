interface Project {
  title: string,
  description: string,
  href?: string,
  tags?: string[],
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'eCommerce Shops platform',
    description: `R&D then built about 10+ website templates of eCommerce in one data center with searching products, cart & checkout, payments, shipping, etc features.`,
    imgSrc: '/imgs/kenworthshop.png',
    tags: ['Laravel', 'NextJs', 'ReactJs'],
    href: 'https://kenworthshop.stagingtd.com/',
  },
]

export default projectsData

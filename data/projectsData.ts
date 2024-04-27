interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'eCommerce Shop',
    description: `Built R&D eCommerce website with searching product, cart & checkout, payment, shipping features.`,
    imgSrc: '/imgs/shop.jpg',
    href: 'https://kenworthshop.stagingtd.com/',
  },
]

export default projectsData

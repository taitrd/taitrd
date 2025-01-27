'use client';
import siteMetadata from "@data/siteMetadata";
import headerNavLinks from "@/lib/constants/headerNavLinks";
// import Logo from '@data/logo.svg'
// import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'
import ThemeSwitcher from "./ThemeSwitcher";
// import SearchButton from './SearchButton';
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import Link from 'next/link';
import { fadeInLeft, fadeInUp } from "@/lib/motion/variants";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <motion.div variants={fadeInLeft}>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">{/* <Logo /> */}</div>
            <div className="hidden h-6 text-3xl font-bold sm:block">
              {siteMetadata.headerTitle}
            </div>
            <div className="sm:hidden h-6 text-2xl font-bold block">
                {siteMetadata.headerTitle}
              </div>
          </div>
        </Link>
      </motion.div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link, key) => (
            <Button key={key} variant="ghost" asChild className="hover:bg-white/40 dark:hover:bg-white/10 hover:backdrop-blur-none">
              <Link
                key={link.title}
                href={link.href}
                className="hidden font-medium text-gray-900 dark:text-gray-50 sm:block"
              >
                <motion.span variants={fadeInUp}>{link.title}</motion.span>
              </Link>
            </Button>
          ))}
        {/* <SearchButton /> */}
        <ThemeSwitcher />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

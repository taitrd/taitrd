'use client';

import { PropsWithChildren } from "react";
import { HomeContext } from "./home";

const HomeProvider = ({
  children,
  blogs,
}: PropsWithChildren<{ blogs: any[] }>) => {
  const value = {
    blogs,
  };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
export default HomeProvider;

'use client';

import { createContext, useContext } from "react";

type HomeContextType = {
  blogs: any[];
};

const defaultValue: HomeContextType = {
  blogs: [],
};

export const HomeContext = createContext<HomeContextType>(defaultValue);
export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    console.error("Error deploying Home Context!!!");
  }
  return context;
};

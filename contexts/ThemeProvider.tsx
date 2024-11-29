"use client";

import { ElementId, ThemeContext } from "./theme";
import { PropsWithChildren, useState } from "react";

export const ThemeProvider = (
  props: PropsWithChildren<{ bgFlagNumber: number }>
) => {
  const { children, bgFlagNumber } = props;
  const [preload, setPreload] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [modalContainer, setModalContainer] = useState<HTMLDivElement>();
  const [activeElements, setActiveElements] = useState<{
    [key in ElementId]?: boolean;
  }>({});
  const [activePageTabs, setActivePageTabs] = useState<{
    [key in string]?: string;
  }>({});

  const value = {
    bgFlagNumber,
    theme: 'light',
    resolvedTheme: 'light',
    preload,
    scrolled,
    activeElements,
    modalContainer,
    activePageTabs,
    setTheme: () => {},
    setPreload: (v: boolean) => setPreload(v),
    setScrolled: (v: boolean) => setScrolled(v),
    setActiveElement: (id: ElementId, v: boolean) => {
      activeElements[id] = v;
      setActiveElements({ ...activeElements });
    },
    toggleElement: (id: ElementId) => {
      activeElements[id] = !activeElements[id];
      setActiveElements({ ...activeElements });
    },
    setModalContainer: (div: HTMLDivElement) => setModalContainer(div),
    setActivePageTabs: (page: string, tab: string) =>
      setActivePageTabs({ [page]: tab }),
    /**
     * Close all off canvas, dropdown, popover or any thing overflow to see main screen
     */
    closeAllBars: () => {
      setActiveElements({});
    },
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;

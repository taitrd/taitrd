import { createContext, useContext } from "react";

export type ElementId = 'navigation_bar' | 'primary_sidebar' | 'secondary_sidebar'
type ThemeContextType = {
    bgFlagNumber: number,
    theme: string,
    resolvedTheme: string,
    preload: boolean,
    scrolled: boolean,
    activeElements: {[key in ElementId]?: boolean},
    modalContainer?: HTMLDivElement,
    activePageTabs: {[key in string]?: string}
    setTheme:(e: string) => void;
    setPreload:(v: boolean) => void;
    setScrolled:(v: boolean) => void;
    setActiveElement:(id: ElementId, active: boolean) => void;
    toggleElement:(id: ElementId) => void;
    setModalContainer: (div: HTMLDivElement) => void;
    setActivePageTabs: (page:string, tab: string) => void;
    closeAllBars:() => void;
}

const defaultValue: ThemeContextType = {
    bgFlagNumber: 0,
    theme: 'light',
    resolvedTheme: 'light',
    preload: false,
    scrolled: false,
    activeElements: {},
    activePageTabs: {},
    setTheme: () => { },
    setPreload: () => { },
    setScrolled: () => { },
    setActiveElement: () => { },
    toggleElement: () => { },
    setModalContainer: () => { },
    setActivePageTabs: () => { },
    closeAllBars: () => { },
}

export const ThemeContext = createContext<ThemeContextType>(defaultValue)
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        console.error('Error deploying Theme Context!!!');
    }
    return context;
}
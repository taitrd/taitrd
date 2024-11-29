import siteMetadata from "@/data/siteMetadata";
import ThemeProvider from "contexts/ThemeProvider";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export default function ThemeWrapper({
  children,
  bgFlagNumber,
}: {
  children: React.ReactNode;
  bgFlagNumber: number;
}) {
  return (
    <NextThemesProvider
      attribute={"class"}
      defaultTheme={siteMetadata.theme}
      enableSystem
    >
      <ThemeProvider bgFlagNumber={bgFlagNumber}>{children}</ThemeProvider>
    </NextThemesProvider>
  );
}

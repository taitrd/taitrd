import siteMetadata from '@data/siteMetadata'
import ThemeProvider from 'contexts/ThemeProvider'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider value={{
      attribute: "class",
      defaultTheme: siteMetadata.theme,
      enableSystem: true,
    }}>
      {children}
    </ThemeProvider>
  )
}

import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { myAppTheme, GlobalStyle } from '../theme'
import { createContext } from 'react'
import { SEO } from '../components/SEO'
import { Layout } from '../components/Layout'

const globalConfig = {
  seo: {
    metaTitle: "Default Meta Title",
  },
}
export const AppContext = createContext({});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme= {myAppTheme}>
      <GlobalStyle />
      <AppContext.Provider value={globalConfig}>
        <SEO pageProps={pageProps} />
        <Layout>
          <Component {...pageProps} globalConfig={globalConfig} />
        </Layout>
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp

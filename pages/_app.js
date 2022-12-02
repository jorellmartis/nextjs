import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { myAppTheme, GlobalStyle } from '../theme'
import { createContext } from 'react'
import { SEO } from '../components/SEO'
import { Layout } from '../components/Layout'


export const AppContext = createContext({});

function MyApp({ Component, pageProps }) {
  const globalConfig = {
    seo: {
      metaTitle: "Default Meta Title",
    },
    headerLinks: pageProps.headerData?.blocks,
  }
  console.log(globalConfig,"global ctx")
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

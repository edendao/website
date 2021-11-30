import { ChakraProvider } from "@chakra-ui/react"
import { CacheProvider } from "@emotion/react"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import Head from "next/head"
import createEmotionCache from "styles/createEmotionCache"
import customTheme from "styles/customTheme"

import defaultSEOConfig from "../../next-seo.config"

const emotionCache = createEmotionCache()

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <CacheProvider value={emotionCache}>
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </ChakraProvider>
  </CacheProvider>
)

export default App

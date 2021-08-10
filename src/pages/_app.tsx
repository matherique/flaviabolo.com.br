import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Bolos Flávia</title>
        <meta property="og:description" content="Com açúcar e com afeto, fiz seu bolo predileto." />
        <meta property="og:image" content="https://www.bolosflavia.com.br/logo.png"/>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp

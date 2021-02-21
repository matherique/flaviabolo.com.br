import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import 'react-datepicker/dist/react-datepicker.css'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Flávia Bolos</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp

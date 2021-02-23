import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

export function withThemeProvider(ui: React.ReactElement): JSX.Element {
  return <ThemeProvider theme={theme}>{ui}</ThemeProvider>
}

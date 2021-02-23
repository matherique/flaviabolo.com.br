import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../screens/home'
import { withThemeProvider } from '../test/utils'
import { buildRecheio } from '../test/generate'
import 'jest-styled-components'

describe('Home', () => {
  it('render with no recheios', () => {
    render(withThemeProvider(<Home recheios={[]} />))
    screen.findByText(/tabela de preços/i)
  })

  it('render with recheios', () => {
    const recheios = buildRecheio()
    render(withThemeProvider(<Home recheios={[recheios]} />))
    screen.findByText(/recheio/i)
  })
})

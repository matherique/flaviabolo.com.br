import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../screens/home'
import { withThemeProvider } from '../test/utils'
import { buildRecheio } from '../test/generate'
import type { Recheio } from '../types'
import 'jest-styled-components'

describe('Home', () => {
  let recheios: Recheio

  beforeEach(() => {
    recheios = buildRecheio({ nome: 'recheio' })
  })

  it('should render', () => {
    render(withThemeProvider(<Home recheios={[]} />))
    expect(screen.getByText(/tabela de preços/i)).toBeInTheDocument()
  })

  it('should render with recheios', () => {
    render(withThemeProvider(<Home recheios={[recheios]} />))
    expect(screen.getByText(/recheio/i)).toBeInTheDocument()
  })
})

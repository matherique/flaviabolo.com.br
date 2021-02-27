import * as React from 'react'
import { render, screen } from '@testing-library/react'
import TabelaPrecos from '../components/tabela-precos'
import { withThemeProvider } from '../test/utils'
import { buildListRecheios, buildRecheio } from '../test/generate'
import type { Recheio } from '../types'
import 'jest-styled-components'

describe('TabelaPrecos', () => {
  let recheio: Recheio
  let recheios: Recheio[]
  const QTD_RECHEIOS = 4

  beforeEach(() => {
    recheio = buildRecheio({ nome: 'recheio' })
    recheios = buildListRecheios(QTD_RECHEIOS)
  })

  it('should render', () => {
    render(withThemeProvider(<TabelaPrecos recheios={[]} />))
    screen.findByText(/tabela de preços/i)
  })

  it('should render with one recheio', () => {
    const { container } = render(
      withThemeProvider(<TabelaPrecos recheios={[recheio]} />)
    )
    const qtdLi = container.querySelectorAll('li').length
    expect(qtdLi).toBe(1)
  })

  it('should render with 4 recheios', () => {
    const { container } = render(
      withThemeProvider(<TabelaPrecos recheios={recheios} />)
    )
    const qtdLi = container.querySelectorAll('li').length
    expect(qtdLi).toBe(QTD_RECHEIOS)
  })
})

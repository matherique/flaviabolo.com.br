import * as React from 'react'
import { render } from '@testing-library/react'
import Informacoes from '../components/informacoes'
import { withThemeProvider } from '../test/utils'
import 'jest-styled-components'

describe('Informacoes', () => {
  it('should render', () => {
    const { container } = render(withThemeProvider(<Informacoes />))
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
  })
})

import * as React from 'react'
import styled from 'styled-components'
import { Recheio } from 'types'

const Container = styled.div`
  grid-area: precos;

  h1 {
    text-align: center;
  }

  ul {
    margin: 20px;
  }

  ul > li {
    list-style: none;
    font-size: 1.6rem;
    margin: 5px 0px;
  }

  ul > li::before {
    content: '🌟';
    margin: 0px 10px;
  }
`

type Props = {
  recheios: Recheio[]
}

function TabelaPrecos({ recheios }: Props): JSX.Element {
  return (
    <Container>
      <h1>📋 Tabela de Preços</h1>
      <ul>
        {recheios.map(recheio => (
          <li key={recheio.id}>
            {recheio.nome} - {recheio.valor} o kg
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TabelaPrecos

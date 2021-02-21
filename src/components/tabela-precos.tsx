import * as React from 'react'
import styled from 'styled-components'
import { Recheio } from 'types'

const Container = styled.div`
  grid-area: precos;

  h1 {
    text-align: center;
  }

  ul {
    margin: 20px 0;
  }

  ul > li {
    list-style: none;
    font-size: 1.6rem;
    margin: 5px 0px;
  }

  ul > li::before {
    content: '🌟';
    margin: 0px 5px;
  }

  @media (max-width: 800px) {
    ul > li {
      list-style: none;
      font-size: 1.3rem;
      margin: 5px 0px;
    }
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
            <b>{recheio.nome}</b> - {recheio.valor}/kg
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TabelaPrecos

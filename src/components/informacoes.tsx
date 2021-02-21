import * as React from 'react'

import styled from 'styled-components'
import { parseTelefone } from 'utils'

const Container = styled.div`
  grid-area: informacoes;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 70%;
  }

  @media (max-width: 800px) {
    margin: 5vh 0;
  }
`

const Contato = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    font-size: 2rem;
    color: ${props => props.theme.colors.text};
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

function Informacoes(): JSX.Element {
  return (
    <Container>
      <img src="/logo.png" />
      <Contato>
        <p>
          ☎️{' '}
          <a href={`tel:${parseTelefone('(12) 3333-3333')}`}>(12) 3333-33333</a>{' '}
        </p>
      </Contato>
    </Container>
  )
}

export default Informacoes

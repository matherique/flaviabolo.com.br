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
  const tel = '(12) 98265-2973'
  return (
    <Container>
      <img src="/logo.png" />
      <Contato>
        <p>
          ☎️ <a href={`tel:${parseTelefone(tel)}`}>{tel}</a>{' '}
        </p>
      </Contato>
    </Container>
  )
}

export default Informacoes

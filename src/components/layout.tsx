import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 60vw;
  margin: 15vh auto;

  @media (max-width: 800px) {
    width: 100vw;
    margin: 5vh 0;
  }
`

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return <Container>{children}</Container>
}

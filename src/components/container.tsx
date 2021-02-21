import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'precos informacoes';

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'informacoes'
      'precos';
  }
`

export default Container

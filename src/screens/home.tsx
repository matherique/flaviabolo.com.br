import * as React from 'react'

import Layout from 'components/layout'
import Informacoes from 'components/informacoes'
import TabelaPrecos from 'components/tabela-precos'
import Container from 'components/container'
import { Recheio } from 'types'

type Props = {
  recheios: Recheio[]
}

export default function Home({ recheios }: Props): JSX.Element {
  return (
    <Layout>
      <Container>
        <TabelaPrecos recheios={recheios} />
        <Informacoes />
      </Container>
    </Layout>
  )
}

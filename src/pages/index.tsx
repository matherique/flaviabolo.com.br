import { GetServerSideProps } from 'next'
import Home from 'screens/home'
import type { Recheio } from 'types'

type Recheios = {
  recheios: Recheio[]
}

const ROOT_URL = getRootUrl()

export const getServerSideProps: GetServerSideProps<Recheios> = async () => {
  const dados = await fetch(`${ROOT_URL}/api/recheios`)
    .then(res => res.json())
    .then(res => res)

  return {
    props: {
      recheios: dados.recheios
    }
  }
}

export default Home

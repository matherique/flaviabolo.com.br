import { GetServerSideProps } from 'next'
import Home from 'screens/home'
import type { Recheio } from 'types'

type Recheios = {
  recheios: Recheio[]
}

const ROOT_URL = process.env.VERCEL_URL || 'http://localhost:3000'

export const getServerSideProps: GetServerSideProps<Recheios> = async () => {
  console.log(`${ROOT_URL}/api/recheios`)
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

import type { Recheio } from '../types'

export function buildRecheio(override?: Partial<Recheio>): Recheio {
  return {
    id: 1,
    nome: 'recheio',
    valor: 'R$ 99',
    ...override
  }
}

export function buildListRecheios(qtd: number): Recheio[] {
  const recheios: Recheio[] = []
  for (let i = 1; i <= qtd; i++) {
    recheios.push(buildRecheio({ id: i, nome: `recheio ${i}` }))
  }

  return recheios
}

export function parseTelefone(numero: string): number {
  const n = numero.replace(/(\(|\)|-| )/g, '')
  return Number(n)
}

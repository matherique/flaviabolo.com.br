export function parseKey(key: string): string {
  return key.split('\n').join('\n')
}

export function getRootUrl(): string {
  let url = process.env.VERCEL_URL || 'http://localhost:3000'

  if (!url.startsWith('http')) {
    url = `https://${url}`
  }

  return url
}

export function parseTelefone(numero: string): number {
  const n = numero.replace(/(\(|\)|-| )/g, '')
  return Number(n)
}

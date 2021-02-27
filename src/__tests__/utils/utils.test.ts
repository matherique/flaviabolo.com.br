import { parseKey, getRootUrl, parseTelefone } from '../../utils'

describe('Utils', () => {
  beforeEach(() => {
    process.env.VERCEL_URL = 'teste.com.br'
  })

  it('should return a key when pass string', () => {
    const key = '-----BEGIN RSA PUBLIC KEY-----\\n'
    const res = parseKey(key)
    expect(res).toBe(key)
  })

  it('should return when VERCEL_URL is undefined ', () => {
    process.env = {
      NODE_ENV: 'test'
    }
    const res = getRootUrl()
    expect(res).toContain('localhost')
  })

  it('should return when VERCEL_URL is teste.com.br', () => {
    const url = 'https://teste.com.br'
    const res = getRootUrl()
    expect(res).toBe(url)
  })

  it('should return NaN when pass invalid phone number', () => {
    const phoneFormated = '12&&&'
    const res = parseTelefone(phoneFormated)
    expect(res).toBe(NaN)
  })
})

import { GoogleSpreadSheet } from '../../services'
import { RecheioHandler } from '../../handlers'
import { AuthenticationError } from '../../errors'

jest.mock('../../services/spreadsheet')

function makeRecheio() {
  const GoogleSpreadSheetMocked = GoogleSpreadSheet as jest.Mock<
    GoogleSpreadSheet
  >

  const googleSSMock = new GoogleSpreadSheetMocked({
    sheetId: '',
    privateKey: '',
    clientEmail: ''
  }) as jest.Mocked<GoogleSpreadSheet>

  const sut = new RecheioHandler(googleSSMock)
  return {
    sut,
    GoogleSpreadSheetMocked,
    googleSSMock
  }
}

describe('API', () => {
  let mockedReq
  let mockedRes

  beforeEach(() => {
    mockedReq = {}
    mockedRes = {
      setHeader: jest.fn(),
      status: jest.fn(() => mockedRes),
      json: jest.fn()
    }
  })

  it('should call authenticate once', async () => {
    const { sut, googleSSMock } = makeRecheio()
    await sut.handler(mockedReq, mockedRes)

    expect(googleSSMock.authenticate).toHaveBeenCalled()
    expect(googleSSMock.authenticate).toHaveBeenCalledTimes(1)
  })

  it('should call loadInfo once', async () => {
    const { sut, googleSSMock } = makeRecheio()
    await sut.handler(mockedReq, mockedRes)

    expect(googleSSMock.loadInfo).toHaveBeenCalled()
    expect(googleSSMock.loadInfo).toHaveBeenCalledTimes(1)
  })

  it('should call getRows once', async () => {
    const { sut, googleSSMock } = makeRecheio()
    await sut.handler(mockedReq, mockedRes)

    expect(googleSSMock.getRows).toHaveBeenCalled()
    expect(googleSSMock.getRows).toHaveBeenCalledTimes(1)
  })

  it('should call getRows and return corret values', async () => {
    const { sut, googleSSMock } = makeRecheio()
    googleSSMock.getRows.mockResolvedValueOnce([])
    await sut.handler(mockedReq, mockedRes)

    expect(mockedRes.status).toHaveBeenCalled()
    expect(mockedRes.status).toHaveBeenCalledWith(200)
    expect(mockedRes.json).toHaveBeenCalledWith({
      date: new Date().toUTCString(),
      recheios: []
    })
  })

  it('should throw an error when authenticate fail', async () => {
    const { sut, googleSSMock } = makeRecheio()
    const authenticationError = new AuthenticationError('Authentication Error')
    googleSSMock.authenticate.mockRejectedValue(authenticationError)
    await sut.handler(mockedReq, mockedRes)

    expect(mockedRes.status).toHaveBeenCalled()
    expect(mockedRes.status).toHaveBeenCalledWith(500)
    expect(mockedRes.json).toHaveBeenCalledWith({
      date: new Date().toUTCString(),
      recheios: [],
      error: 'Authentication Error'
    })
    expect(googleSSMock.authenticate()).rejects.toThrow('Authentication Error')
  })
})

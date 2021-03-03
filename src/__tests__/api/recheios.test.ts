import { GoogleSpreadSheet } from '../../services'
import { RecheioHandler } from '../../handlers'

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
})

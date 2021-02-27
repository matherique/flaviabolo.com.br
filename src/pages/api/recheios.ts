import { parseKey } from '../../utils'
import { RecheioHandler } from '../../handlers'
import { GoogleSpreadSheet } from '../../services'

const sheetId = process.env.SHEETID

const configSpreadSheet = {
  sheetId,
  privateKey: parseKey(process.env.GOOGLE_PRIVATE_KEY),
  clientEmail: process.env.GOOGLE_CLIENT_EMAIL
}

const googleSS = new GoogleSpreadSheet(configSpreadSheet)
const spreadsheet = new RecheioHandler(googleSS)

export default spreadsheet.handler.bind(spreadsheet)

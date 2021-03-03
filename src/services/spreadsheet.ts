import { SpreadsheetError } from '../errors'
import {
  GoogleSpreadsheet as GoogleSS,
  GoogleSpreadsheetRow
} from 'google-spreadsheet'

type Config = {
  sheetId: string
  privateKey: string
  clientEmail: string
}

export interface Spreadsheet {
  getRows(): Promise<GoogleSpreadsheetRow[]>
}

export class GoogleSpreadSheet implements Spreadsheet {
  private readonly googleSS: GoogleSS

  constructor(private readonly config: Config) {
    this.googleSS = new GoogleSS(config.sheetId)
  }

  public async getRows(): Promise<GoogleSpreadsheetRow[]> {
    try {
      await this.googleSS.useServiceAccountAuth({
        client_email: this.config.clientEmail,
        private_key: this.config.privateKey
      })

      await this.googleSS.loadInfo()

      const sheet = this.googleSS.sheetsByIndex[0]
      const rows = await sheet.getRows()

      return rows
    } catch (error) {
      throw new SpreadsheetError(error)
    }
  }
}

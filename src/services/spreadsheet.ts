import { AuthenticationError } from '../errors'
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet'

type Config = {
  sheetId: string
  privateKey: string
  clientEmail: string
}

export interface Spreadsheet {
  authenticate(): Promise<void>
  loadInfo(): Promise<void>
  getRows(): Promise<GoogleSpreadsheetRow[]>
}

export class GoogleSpreadSheet implements Spreadsheet {
  private readonly googleSS: GoogleSpreadsheet

  constructor(private readonly config: Config) {
    this.googleSS = new GoogleSpreadsheet(config.sheetId)
  }

  public async authenticate(): Promise<void> {
    try {
      await this.googleSS.useServiceAccountAuth({
        client_email: this.config.clientEmail,
        private_key: this.config.privateKey
      })
    } catch (error) {
      throw new AuthenticationError(`Unable to authenticate: ${error.message}`)
    }
  }

  public async loadInfo(): Promise<void> {
    await this.googleSS.loadInfo()
  }

  async getRows(): Promise<GoogleSpreadsheetRow[]> {
    const sheet = this.googleSS.sheetsByIndex[0]
    const rows = await sheet.getRows()

    return rows
  }
}

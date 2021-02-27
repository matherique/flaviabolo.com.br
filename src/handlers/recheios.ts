import { NextApiRequest, NextApiResponse } from 'next'
import { Spreadsheet } from '../services/spreadsheet'
import { Recheio } from 'types'

type ResponseData = {
  date: string
  recheios: Recheio[]
  error?: string
}

const DIAS = 1
const TEMPO_CACHE = 60 * 60 * DIAS
export class RecheioHandler {
  constructor(private readonly spreadsheet: Spreadsheet) {}

  async handler(
    _: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ): Promise<void> {
    res.setHeader(
      'Cache-Control',
      `s-maxage=${TEMPO_CACHE}, stale-while-revalidate`
    )

    try {
      await this.spreadsheet.authenticate()
      await this.spreadsheet.loadInfo()

      const rows = await this.spreadsheet.getRows()

      const recheios = rows.map(({ rowIndex, nome, valor }) => ({
        id: rowIndex,
        nome,
        valor
      }))

      return res.status(200).json({
        date: new Date().toUTCString(),
        recheios
      })
    } catch (error) {
      return res.status(500).json({
        date: new Date().toUTCString(),
        recheios: [],
        error: error.message
      })
    }
  }
}

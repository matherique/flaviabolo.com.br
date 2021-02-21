import { GoogleSpreadsheet } from 'google-spreadsheet'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Recheio } from 'types'
import { parseKey } from 'utils'

type ResponseData = {
  date: string
  recheios: Recheio[]
  error?: string
}

const TEMPO_CACHE = 60 * 60 * 12

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
): Promise<void> {
  res.setHeader(
    'Cache-Control',
    `s-maxage=${TEMPO_CACHE}, stale-while-revalidate`
  )

  try {
    const sheetId = process.env.SHEETID
    const doc = new GoogleSpreadsheet(sheetId)

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY
    })

    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]

    const rows = await sheet.getRows()

    const recheios = rows.map(({ rowIndex, nome, valor }) => ({
      id: rowIndex,
      nome,
      valor
    }))

    return res.status(200).json({
      date: new Date().toUTCString(),
      recheios,
      error: process.env.GOOGLE_PRIVATE_KEY
    })
  } catch (error) {
    return res.status(200).json({
      date: new Date().toUTCString(),
      recheios: [],
      error: process.env.GOOGLE_PRIVATE_KEY
    })
  }
}

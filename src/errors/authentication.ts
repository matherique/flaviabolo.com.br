export class SpreadsheetError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'SpreadsheetError'
  }
}

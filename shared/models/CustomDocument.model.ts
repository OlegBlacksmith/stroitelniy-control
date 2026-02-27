export interface CustomDocument {
  id: number
  title: string
  items: CustomDocumentItem[]
}

export interface CustomDocumentItem {
  number: string
  header: string
  content?: string
  points?: CustomPoint[]
  table?: CustomTable
}

export interface CustomPoint {
  id: number
  text: string
}

export interface CustomTable {
  headers: string[]
  rows: string[][]
}

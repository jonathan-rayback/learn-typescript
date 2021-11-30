import { Document } from '../../domain/print'

interface Printer {
  print: (data: string) => boolean
}

interface PrintDoc {
  print: (doc: Document) => boolean
}

const print = (printer: Printer) => (doc: Document): boolean => {
  const payload = `${doc.title} \n ${doc.body}`

  return printer.print(payload)
}

export const makeDocPrinter = (printer: Printer): PrintDoc => {
  return {
    print: print(printer)
  }
}

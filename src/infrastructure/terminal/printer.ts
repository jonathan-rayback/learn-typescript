interface PrinterConfig {
  printEmpty: boolean
}

const print =
  (config: PrinterConfig): any => // TODO: I feel like having 'any' here is bad, research this
    (data: string): boolean => {
      if (data === '' && !config.printEmpty) {
        return false
      }

      console.log(data)

      return true
    }

export const makePrinter = (config: PrinterConfig): any => {
  return {
    print: print(config)
  }
}

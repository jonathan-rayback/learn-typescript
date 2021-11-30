import { makePrinter } from './infrastructure/terminal/printer'
import { makeDocPrinter } from './useCases/printDoc/printer'

const main = (): void => {
  const printer = makePrinter({ printEmpty: false })
  const printDoc = makeDocPrinter(printer)

  const success = printDoc.print({
    title: 'My Doc',
    body: 'This is super cool sexy content'
  })

  if (success) {
    console.log('successfully printed document.')
  } else {
    console.log('printing doc failed.')
  }
}

// TODO: How to make a clean compile in package.jason (delete old compilation artifacts)?
main()

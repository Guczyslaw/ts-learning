import { expect } from 'chai'
import { add, filterEvenNumber, stringReversal, palindromeChecker, factorial } from '../../src/basic/tdd'

describe.only('simpleTDD', () => {
  it('add', () => {
    expect(add(2, 3)).to.equal(5)
  })

  it('filterEvenNumber', () => {
    expect(filterEvenNumber([6, 2, 79, 24, 31, 56, 23])).to.deep.equal([6, 2, 24, 56])
  })

  it('stringReversal', () => {
    expect(stringReversal('Polska')).to.equal('aksloP')
  })

  it('palindromeChecker', () => {
    expect(palindromeChecker('kayak')).to.equal(true)
    expect(palindromeChecker('anna')).to.equal(true)
    expect(palindromeChecker('butelka')).to.equal(false)
  })

  it('factorial', () => {
    expect(factorial(0)).to.equal(1)
    expect(factorial(5)).to.equal(120)
  })
})

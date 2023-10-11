import assert from 'assert'
import gender from '../index'

describe('Simple names', () => {
  it('It should return male, female, or unknown', () => {
    assert.equal('male', gender.detect('John', { useCount: true }))
    assert.equal('female', gender.detect('Holly', { useCount: true }))
  })
})

describe('Double names', () => {
  it('It should return male, female, or unknown', () => {
    assert.equal('male', gender.detect('Tim Johnson', { useCount: true }))
    assert.equal('female', gender.detect('Francesca Rossi', { useCount: true }))
  })
})

describe('Bad formatted names', () => {
  it('It should return male, female, or unknown', () => {
    assert.equal('male', gender.detect('BiLL$...', { useCount: true }))
    assert.equal('female', gender.detect('::Jenni♥fer::', { useCount: true }))
  })
})

describe('First names', () => {
  it('It should return the first name', () => {
    assert.equal('mario', gender.getFirstName('Mario'))
    assert.equal('karl', gender.getFirstName('Karl Callagan'))
    assert.equal('francesca', gender.getFirstName('Francesca Chiara Rossi'))
    assert.equal('ludwig', gender.getFirstName('Ludwig van Beethoven'))
  })
})

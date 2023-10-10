import assert from 'assert'
import gender from '../index'

describe('Simple names', () => {
  it('It should return male, female, or unknown', () => {
    assert.equal('male', gender.detect('John', 'en'))
    assert.equal('female', gender.detect('Holly'))
  })
})

describe('Double names', () => {
  it('It should return male, female, or unknown', () => {
    assert.equal('male', gender.detect('Tim Johnson'))
    assert.equal('female', gender.detect('Francesca Rossi'))
  })
})

describe('Bad formatted names', () => {
  it('It should return male, female, or unknown', () => {
    assert.equal('male', gender.detect('BiLL$...'))
    assert.equal('female', gender.detect('::Jenni♥fer::'))
  })
})

describe('Simple names with languages variable', () => {
  it('It should return male, female, or unknown', () => {
    assert.equal('male', gender.detect('Johnny', 'en'))
    assert.equal('male', gender.detect('Andrea', 'it'))
    assert.equal('unisex', gender.detect('Andrea', 'hgjj'))
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

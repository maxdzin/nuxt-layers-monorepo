import { assert, describe, expect, it } from 'vitest'

describe('Component example test', () => {
  it('test pass', () => {
    expect.hasAssertions()
    assert.equal(Math.pow(2, 2), 4)
    expect(Math.sqrt(144)).toBe(12)
  })
})

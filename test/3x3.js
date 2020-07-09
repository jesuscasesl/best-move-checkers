var assert = require('assert')
var cher = require('../app')

describe('Test Checkeres', function () {
  describe('Board 3 X 3', function () {
    it('Return 0', function () {
      const board = [
        '...',
        '...',
        'XXX',
        '.O.'
      ]
      var num = cher.solution(board)
      assert.strictEqual(num, 0)
    })

    it('Return 1', function () {
      const board = [
        '...',
        '.X.',
        'XXX',
        '..O'
      ]
      var num = cher.solution(board)
      assert.strictEqual(num, 1)
    })

    it('Return 0', function () {
      const board = [
        '...',
        'X..',
        'XXX',
        '..O'
      ]
      var num = cher.solution(board)
      assert.strictEqual(num, 0)
    })
  })
})

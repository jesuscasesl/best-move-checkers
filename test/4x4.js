var assert = require('assert')
var cher = require('../app')

describe('Test Checkeres', function () {
  describe('Board 4 X 4', function () {
    it('Return 1', function () {
      const board = [
        '....',
        '..X.',
        '.O..',
        '..X.',
        '....'
      ]
      var num = cher.solution(board)
      assert.strictEqual(num, 1)
    })

    it('Return 2', function () {
      const board = [
        '....',
        'X.X.',
        '....',
        '..X.',
        '...O'
      ]
      var num = cher.solution(board)
      assert.strictEqual(num, 2)
    })

    it('Return 0', function () {
      const board = [
        '...X',
        '..X.',
        '.O..',
        '....',
        '.X..'
      ]
      var num = cher.solution(board)
      assert.strictEqual(num, 0)
    })
  })
})

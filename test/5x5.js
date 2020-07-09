var assert = require('assert')
var cher = require('../app')

describe('Test Checkeres', function () {
  describe('Board 5 X 5', function () {
    it('Return 2', function () {
      const boardTest = [
        '.....',
        '.....',
        '..X..',
        'X....',
        '..X..',
        '.O...'
      ]
      var num = cher.solution(boardTest)
      assert.strictEqual(num, 2)
    })

    it('Return 2', function () {
      const board = [
        '...X.',
        '.....',
        '.X.X.',
        '.....',
        '.X.X.',
        '..O..'
      ]
      var num = cher.solution(board)
      assert.strictEqual(num, 2)
    })

    it('Return 0', function () {
      const board = [
        '...X.',
        '....X',
        '.X.X.',
        '....X',
        'X..X.',
        '..O..'
      ]
      var num = cher.solution(board)
      assert.strictEqual(num, 0)
    })
  })
})

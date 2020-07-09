var assert = require('assert')
var cher = require('../app')

describe('Test Checkeres', function () {
  describe('Board 6 X 6', function () {
    it('Return 1', function () {
      const boardTest = [
        '......',
        '...X..',
        '....O.',
        '......',
        '......',
        '......',
        '......'
      ]
      var num = cher.solution(boardTest)
      assert.strictEqual(num, 1)
    })

    it('Return 2', function () {
      const boardTest = [
        '......',
        '....X.',
        '......',
        '..X...',
        '.O....',
        '......',
        '......'
      ]
      var num = cher.solution(boardTest)
      assert.strictEqual(num, 2)
    })

    it('Return 0', function () {
      const boardTest = [
        '......',
        '....X.',
        '......',
        'X..X..',
        '.O....',
        '......',
        '......'
      ]
      var num = cher.solution(boardTest)
      assert.strictEqual(num, 0)
    })
  })
})

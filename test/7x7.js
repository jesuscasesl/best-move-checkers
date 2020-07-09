var assert = require('assert')
var cher = require('../app')

describe('Test Checkeres', function () {
  describe('Board 7 X 7', function () {
    it('Return 3', function () {
      const boardTest = [
        '.......',
        '.X.....',
        '.......',
        '.X.X.X.',
        '.......',
        '.X.X...',
        '.XO....',
        '.......'
      ]
      var num = cher.solution(boardTest)
      assert.strictEqual(num, 3)
    })

    it('Return 2', function () {
      const boardTest = [
        '.......',
        '.......',
        '.......',
        '.X.X.X.',
        '.......',
        '.X.X...',
        '.XO....',
        '.......'
      ]
      var num = cher.solution(boardTest)
      assert.strictEqual(num, 2)
    })

    it('Return 0', function () {
      const boardTest = [
        '.......',
        '.......',
        '.......',
        '.X.X.X.',
        '.......',
        '.....X..',
        '.XO....',
        '.......'
      ]
      var num = cher.solution(boardTest)
      assert.strictEqual(num, 0)
    })
  })
})

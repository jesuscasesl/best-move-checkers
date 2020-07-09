function calculateIsCanEat (boardCherkers, ejeX, ejeY, ejeXOut, ejeYOut) {
  if (boardCherkers[ejeX][ejeY] === 'X' && boardCherkers[ejeXOut][ejeYOut] === '.') {
    return true
  }
  return false
}

function calculateIsCanMove (ejeX, ejeY, ejeXOut, ejeYOut) {
  if (ejeX > 0 && ejeY > 0 && ejeXOut >= 0 && ejeYOut >= 0) {
    return true
  }
  return false
}

function isCanMove (boardCherkers, ejeX, ejeY, ejeXOut, ejeYOut) {
  if (calculateIsCanMove(ejeX, ejeY, ejeXOut, ejeYOut) && calculateIsCanEat(boardCherkers, ejeX, ejeY, ejeXOut, ejeYOut)) {
    return true
  }
  return false
}

function searcBestMove (boardCherkers, currentDepthMovement, depth) {
  let isThereNextMove = false
  let ejeY = 0
  let ejeYOut = 0
  const newDepthMovement = []
  const movePosibility = 2

  for (let y = 0; y < currentDepthMovement.length; y += 1) {
    const ejeX = currentDepthMovement[y].x - 1
    const ejeXOut = currentDepthMovement[y].x - 2
    for (let w = 0; w < movePosibility; w += 1) {
      if (w === 0) {
        ejeY = parseInt(currentDepthMovement[y].y) - 1
        ejeYOut = parseInt(currentDepthMovement[y].y) - 2
      } else {
        ejeY = parseInt(currentDepthMovement[y].y) + 1
        ejeYOut = parseInt(currentDepthMovement[y].y) + 2
      }

      if (isCanMove(boardCherkers, ejeX, ejeY, ejeXOut, ejeYOut)) {
        newDepthMovement.push({ x: ejeXOut, y: ejeYOut })
        isThereNextMove = true
      }
    }
  }

  if (isThereNextMove) {
    depth += 1
    return searcBestMove(boardCherkers, newDepthMovement, depth)
  } else {
    return depth
  }
}

function generateBoard (boardCheckers) {
  const depth = 0
  const move = []

  const newBoard = boardCheckers.map(row => row.split(''))
  const getJafarPositionX = newBoard.findIndex(row => row.includes('O'))
  const getJafarPositionY = newBoard[getJafarPositionX].findIndex(column => column === 'O')

  move.push({ x: getJafarPositionX, y: getJafarPositionY })
  return {
    board: newBoard,
    move: [{ x: getJafarPositionX, y: getJafarPositionY }],
    depth
  }
}

function solution (boardCheckers) {
  const dataInitial = generateBoard(boardCheckers)
  const numberKill = searcBestMove(dataInitial.board, dataInitial.move, dataInitial.depth)
  return numberKill
}

const board = [
  '.......',
  '.X.....',
  '.......',
  '.X.X.X.',
  '.......',
  '.X.X...',
  '.XO....',
  '.......'
]

const num = solution(board)
console.log(`Te best move:  ${num}`)

module.exports = {
  solution: solution
}

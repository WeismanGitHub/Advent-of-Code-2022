// a, x = rock; score = 1
// b, y = paper; score = 2
// c, z = scissors; score = 3

function calculateScore(strategyGuide) {
    const moveValues = { x: 1, y: 2, z: 3 }

    const scores = strategyGuide.trim().split('\n').map((instruction) => {
        let [enemyMove, yourMove] = instruction.toLowerCase().trim('\r').split(' ')
        enemyMove = enemyMove.charCodeAt() - 96 // convert to numeric value
        yourMove = moveValues[yourMove]
        let score = yourMove

        if (
            (enemyMove == 3 && yourMove == 1) ||
            (enemyMove == 2 && yourMove == 3) ||
            (enemyMove == 1 && yourMove == 2)
            ) {
            score += 6
        } else if (enemyMove == yourMove) {
            score += 3
        }

        return score
    })

    return scores.reduce((a, b) => a + b)
}

function chooseRightMoves(strategyGuide) {
    const moveMatrix = {
        Rock: { Loss: 3, Draw: 1, Win: 2 },
        Paper: { Loss: 1, Draw: 2, Win: 3 },
        Scissors: { Loss: 2, Draw: 3, Win: 1 }
    }

    const scores = strategyGuide.trim().split('\n').map((instruction) => {
        let [enemyMove, yourMove] = instruction.trim('\r').split(' ')
        let score = 0

        switch (enemyMove) {
            case 'A':
                enemyMove = 'Rock'
                break;
            case 'B':
                enemyMove = 'Paper'
                break;
            case 'C':
                enemyMove = 'Scissors'
                break;
        }

        switch (yourMove) {
            case 'X':
                yourMove = 'Loss'
                break;
            case 'Y':
                yourMove = 'Draw'
                score += 3
                break;
            case 'Z':
                yourMove = 'Win'
                score += 6
                break;
        }
        
        return score + moveMatrix[enemyMove][yourMove]
    })

    return scores.reduce((a, b) => a + b)
}

module.exports = { calculateScore, chooseRightMoves }
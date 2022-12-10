// a, x = rock; score = 1
// b, y = paper; score = 2
// c, z = scissors; score = 3

function calculateScore(strategyGuide) {
    const moveValues = { x: 1, y: 2, z: 3 }

    const scores = strategyGuide.trim().split('\n').map((instruction) => {
        let [enemyMove, yourMove] = instruction.toLowerCase().trim('\r').split(' ')
        enemyMove = enemyMove.charCodeAt() - 96 // convert to numeric value
        let score = moveValues[yourMove]
        yourMove = moveValues[yourMove]

        if ( enemyMove < yourMove) {
            score += 6
        } else if (enemyMove == yourMove) {
            score += 3
        }

        return score
    })

    return scores.reduce((a, b) => a + b)
}

module.exports = { calculateScore }
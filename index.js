const { getTopCalorieAmount, GetTop3CalorieGroupsTotal } = require('./solutions/day-1')
const { calculateScore, chooseRightMoves } = require('./solutions/day-2')
const { organizeRuckSack, getBadges } = require('./solutions/day-3')
const { getRedundantPairs, getPairsWithAnyRedundancy } = require('./solutions/day-4')
const { resolve } = require('path')
const fs = require('fs');

const input = fs.readFileSync(resolve(__dirname, './inputs/day-4.txt'), 'utf8')

console.log(getPairsWithAnyRedundancy(input))
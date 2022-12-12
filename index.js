const { getTopCalorieAmount, GetTop3CalorieGroupsTotal } = require('./solutions/day-1')
const { calculateScore, chooseRightMoves } = require('./solutions/day-2')
const { organizeRuckSack, getBadges } = require('./solutions/day-3')
const { resolve } = require('path')
const fs = require('fs');

const input = fs.readFileSync(resolve(__dirname, './inputs/day-2.txt'), 'utf8')

console.log(chooseRightMoves(input))
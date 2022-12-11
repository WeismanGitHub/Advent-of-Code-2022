const { getTopCalorieAmount, GetTop3CalorieGroupsTotal } = require('./solutions/day-1')
const { organizeRuckSack, getBadges } = require('./solutions/day-3')
const { calculateScore } = require('./solutions/day-2')
const { resolve } = require('path')
const fs = require('fs');

const input = fs.readFileSync(resolve(__dirname, './inputs/day-2.txt'), 'utf8')

console.log(calculateScore(input))
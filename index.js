const { getTopCalorieAmount, GetTop3CalorieGroupsTotal } = require('./solutions/day-1')
const { organizeRuckSack, getBadges } = require('./day-3')
const { calculateScore } = require('./day-2')
const { resolve } = require('path')
const fs = require('fs');

const input = fs.readFileSync(resolve(__dirname, './inputs/day-4.txt'), 'utf8')

console.log()
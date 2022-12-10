const { getTopCalorieAmount, GetTop3CalorieGroupsTotal } = require('./day-1')
const { calculateScore } = require('./day-2')
const { resolve } = require('path')
const fs = require('fs');

const input = fs.readFileSync(resolve(__dirname, './inputs/day-2.txt'), 'utf8')

console.log(calculateScore(input))
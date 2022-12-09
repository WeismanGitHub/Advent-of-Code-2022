function getTopCalorieAmount(calorieGroups) {
    calorieGroups = calorieGroups.split('\n\n')
    let highestCalorieAmount = 0

    calorieGroups.forEach(group => {
        group = group.split('\n')

        const total = group.reduce((total = 0, calories) => {
            return Number(total) + Number(calories)
        })
        
        highestCalorieAmount = highestCalorieAmount < total ? total : highestCalorieAmount
    })

    return highestCalorieAmount
}

function GetTop3CalorieGroupsTotal(calorieGroups) {
    calorieGroups = calorieGroups.split('\n\n')
    const totals = [0, 0, 0]

    calorieGroups.forEach(group => {
        group = group.split('\n')

        const total = Number(group.reduce((total = 0, calories) => {
            return Number(total) + Number(calories)
        }))

        totals.push(total)
    })

    return totals.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b)
}

module.exports = { getTopCalorieAmount, GetTop3CalorieGroupsTotal }
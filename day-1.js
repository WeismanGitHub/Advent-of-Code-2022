function findHighestCalories(calorieGroups) {
    calorieGroups = calorieGroups.split('\n\n')
    let highestCalories = 0

    calorieGroups.forEach(group => {
        group = group.split('\n')

        const total = group.reduce((total = 0, calories) => {
            return Number(total) + Number(calories)
        })
        
        highestCalories = highestCalories < total ? total : highestCalories
    })

    return highestCalories
}

module.exports = { findHighestCalories }
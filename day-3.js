function organizeRuckSack(ruckSacks) {
    const sharedItems = ruckSacks.trim().split('\n').map(sack => {
        const length = sack.length
        const halfway = length / 2

        const [comp1, comp2] = [sack.slice(0, halfway), sack.slice(halfway, length)]

        return [...new Set(comp1.split('').filter(item => comp2.includes(item)))] // Prunes of duplicate values.
    })

    const priorities = sharedItems.flat().map(item => {
        let priority = item.toLowerCase().charCodeAt() - 96
        
        if (item !== item.toLowerCase()) { // If uppercase.
            priority += 26
        }

        return priority
    })
    
    return priorities.reduce((a, b) => a + b)
}

module.exports = { organizeRuckSack }
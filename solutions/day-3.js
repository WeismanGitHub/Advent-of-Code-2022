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

function getBadges(ruckSacks) {
    let splitSacks = [...ruckSacks.trim().match(/(?:.+\n?){3}/g)] // Couldn't figure out the regex for splitting by by ever 3rd \n.
    const groupedSacks = []

    while (splitSacks.length > 0) {
        groupedSacks.push(splitSacks.splice(0, 3))
    }

    const sharedItems = groupedSacks.map(sack => {
        return [...new Set(sack[0].split('').filter(item => { return sack[1].includes(item) && sack[2].includes(item) }))]
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

module.exports = { organizeRuckSack, getBadges }
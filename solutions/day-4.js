function getRedundantPairs(pairs) {
    const redundantPairs = pairs.trim().split('\n').filter(pair => {
        const [firstRange, secondRange] = [...pair.split(',')].map(range => {
            let [start, end] = range.split('-').map(x => Number(x))
            const count = []
            
            for (start; start <= end; start++) {
                count.push(start)
            }

            return count
        })

        const isRedundant = firstRange.every(num => secondRange.includes(num)) || secondRange.every(num => firstRange.includes(num))

        return isRedundant
    })

    return redundantPairs.length
}

module.exports ={ getRedundantPairs }
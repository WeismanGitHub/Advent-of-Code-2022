function getTopCrates(data) {
    const [crates, instructions] = data.trimRight().split('\n\r')
    const splitCrates = crates.split('\n')
    let modeledColumns = {}

    splitCrates.slice(0, splitCrates.length - 1).forEach(row => {
        const blockList = ['[', ']', ' ']
        row = row.replace('\r', '')
        let skip = { }

        for (char of row) {
            if (blockList.includes(char)) {
                continue
            }
            
            let index = row.indexOf(char, (skip[char] || 0) + 1)
            let column = 0;
            skip[char] = index

            while (index >= 4) {
                index -= 4
                column += 1
            }
            
            if (modeledColumns[column]) {
                modeledColumns[column].push(char)
            } else {
                modeledColumns[column] = [char]
            }
        }
    })

    for (let instruction of instructions.trim().split('\n')) {
        const [amount, location, destination] = instruction.match(/\d+/g)

        const crates = modeledColumns[location - 1].splice(0, amount)
        modeledColumns[destination - 1].unshift(...crates.reverse())

    }

    let topCrates = ''

    for (let i = 0; i < Object.keys(modeledColumns).length; i++) {
        topCrates += modeledColumns[i][0] || ''
    }

    return topCrates
}

module.exports = { getTopCrates }
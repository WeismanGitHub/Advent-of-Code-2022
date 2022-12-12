function getTopCrates(data) {
    const [crates, instructions] = data.split('\n\r')
    const splitCrates = crates.split('\n')

    const columns = splitCrates.slice(0, splitCrates.length - 1).map(row => {
        row = row.replaceAll('[', '').replaceAll(']', '').replace('\r', '') // Find out how to replace array of chars.
        const column = []

        for (char of row) {
            if (char !== ' ') { // Find out how to break.
                const index = row.indexOf(char)

                column.splice(index + index % 3, 0, char)
            }
        }

        return column
    })

    return columns
}

module.exports = { getTopCrates }
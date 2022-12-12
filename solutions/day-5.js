function getTopCrates(data) {
    const [crates, instructions] = data.trimRight().split('\n\r')
    const splitCrates = crates.split('\n')
    let modeledColumns = {}

    splitCrates.slice(0, splitCrates.length - 1).forEach(row => {
        row = row.replaceAll('[', '').replaceAll(']', '').replace('\r', '') // Find out how to replace array of chars.

        for (char of row) {
            if (char !== ' ') { // Figure out how to break loop so structure is flattened.
                let index = row.indexOf(char) + row.replaceAll(' ', '').split(char)[0].length
                let counter = 0;

                while (index >= 3) {
                    index -= 3
                    counter += 1
                }

                if (modeledColumns[counter]) {
                    modeledColumns[counter].push(char)
                } else {
                    modeledColumns[counter] = [char]
                }
            }
        }
    })

    return modeledColumns
    // for (let instruction of instructions.trim().split('\n')) {
    //     const [location, amount, destination] = instruction.match(/\d/g)

    //     const crate = columns[location - 1].slice(0, amount)

    //     console.log(crate)
    // }
}

module.exports = { getTopCrates }
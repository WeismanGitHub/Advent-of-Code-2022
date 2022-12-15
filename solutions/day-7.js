function findLargeDirectories(input) {
    const splitInputs = input.split('$ cd /')[1].match(/\$[^$]+(?!\$)/g)

    for (let input of splitInputs) {
        const command = input.match(/\$ .*/gi)
        const output = input.split(/\$ .*/gi)
    }
}

module.exports = { findLargeDirectories }
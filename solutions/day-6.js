function findPacketStart(signal) {
    signal = signal.trim()
    const last4Chars = []
    let packetStart = 0;

    for (let char of signal) {
        last4Chars.push(char)

        if ([...new Set(last4Chars)].length == 4) { // Check if duplicates.
            packetStart = signal.indexOf(last4Chars.join('')) + 4
            break
        }
        
        if (last4Chars.length >= 4) {
            last4Chars.splice(0, 1)
        }
    }

    return packetStart
}

function findMessageStart(signal) {
    signal = signal.trim()
    const last14Chars = []
    let messageStart = 0;

    for (let char of signal) {
        last14Chars.push(char)

        if ([...new Set(last14Chars)].length == 14) { // Check if duplicates.
            messageStart = signal.indexOf(last14Chars.join('')) + 14
            break
        }
        
        if (last14Chars.length >= 14) {
            last14Chars.splice(0, 1)
        }
    }

    return messageStart
}

module.exports = { findPacketStart, findMessageStart }
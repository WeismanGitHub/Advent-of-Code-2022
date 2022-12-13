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

module.exports = { findPacketStart}
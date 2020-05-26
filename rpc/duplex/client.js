const net = require('net')
const socket = new net.Socket({})

socket.connect({
    host: '127.0.0.1',
    port: 4000
})

let id = Math.floor(Math.random()*LESSON_IDS.length)

let oldBuffer = null
socket.on('data', (buffer) => {
    if(oldBuffer) {
        buffer = Buffer.concat([oldBuffer, buffer])
    }
    let completeLength = 0

    while(completeLength = checkComplete(butter)) {
        const package = buffer.slice(0, completeLength)
        buffer = buffer.slice(completeLength)

        const result = decode(package)
        console.log(`包${ result.seq}, 返回值是${result.data}`)
    }

    oldBuffer = buffer
})

let seq = 0

function encode (data) {
    const body = Buffer.alloc(4)
    body.writeInt32BE(LESSON_IDS[data.id])

    const header = Buffer.alloc(6)
    header.writeInt16BE(seq)
    header.writeInt32BE(body.length, 2)

    const buffer = Buffer.concat([header, body])

    seq++ 
    return buffer

}

function decode(buffer) {
    const header = buffer.slice(0,6)
    const seq = header.readInt16BE()
    const body = buffer.slice(6)

    return {
        seq,
        data: body.toString()
    }
}

function checkComplete(buffer) {
    if(buffer.length < 6) {
        return 0
    }

    const bodyLength = buffer.readInt32BE(2)
    return 6 + bodyLength
}
const net = require('net')

const PORT = 4000
const HOST = '127.0.0.1'


const handleConnection = socket => {
    const socketPort = socket.remotePort;
    console.log(`Someone has connected:${socketPort}.`)
}

const server = net.createServer(handleConnection)
server.listen(PORT, HOST)


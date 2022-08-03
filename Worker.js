const net = require('net')

const PORT = 4000
const HOST = '127.0.0.1'

const clientListener = () => {
    console.log('Connected.')
}

const client = new net.Socket()
client.connect(PORT, HOST, clientListener)
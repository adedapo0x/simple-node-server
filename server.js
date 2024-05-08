const http = require('node:http')
const os = require('os')

const server = http.createServer((req, res) => {
    // Handling CORS
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

    res.writeHead(200, {'Content-Type': 'application/json'})

    // Generating random delay
    const randomTime = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000)
    setTimeout(() =>{
        res.end(JSON.stringify(os.cpus()[0]))
    }, randomTime)
})

server.listen(3000, ()=>{
    console.log("Server running quite alright")
})

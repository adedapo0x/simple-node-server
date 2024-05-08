const http = require('node:http')
const os = require('os')

const server = http.createServer((req, res) => {
    // Handling CORS

})

server.listen(3000, ()=>{
    console.log("Server running quite alright")
})

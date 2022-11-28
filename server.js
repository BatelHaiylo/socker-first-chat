const fs = require('fs')
const server = require("http").createServer((req,res)=>{
    fs.readFile('./index.html',(e,result)=>
    res.end(result))
})
const io = require ('socket.io')(server)
const Port = 5050

io.on('connection', (socket)=>{
    socket.on('message',(textMsg)=>{
        io.emit('message', textMsg)
    })
})

server.listen(Port, ()=>{
    console.log(`Server listen on port: ${Port}`)
})
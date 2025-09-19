import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const app=express()
app.use(cors())
app.use(express.json())

const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin: "https://3795c0ab-8993-4c04-bf9c-f2a9e8227bcf-00-1mbw3vog5eiat.kirk.replit.dev/",
        methods:["GET","POST"],
    }
})

io.on("connection",(socket)=>{
    console.log("User connected:", socket.id)
    
    socket.on("chat_message",(data)=>{
        console.log("Message received:", data)
        // Broadcast the message to all connected clients
        io.emit("new_message", data)
    })
    
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id)
    })

    socket.on("newCode",(code)=>{
        console.log(code)
    })
})


app.get("/",(req,res)=>{
    console.log("server is on")
    res.json({
        msg:"server is running"
    })
})


const PORT=process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

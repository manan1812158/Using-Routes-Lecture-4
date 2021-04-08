var express = require('express')
var app = express()
var br = require('./BookRoute')
var std = require('./StudentRoute')

app.get('/',(req,res)=>{
    res.send("Main Page!")

})
//http://localhost:3000/StudentHome
app.use('/StudentHome', std)
//http://localhost:3000/BookHome
app.use('/BookHome',br)

var server=app.listen(3000, ()=>{
console.log("Server is runing on 3000 port")
})
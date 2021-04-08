var express=require('express')
var bookroute=express()

//http://localhost:3000/BookHome
bookroute.get('/',(req,res)=>{
    res.send("<h1> Book Haven HomePage </h1>")
})
//http://localhost:3000/BookHome/Library
bookroute.put('/Library',(req,res)=>{
    res.send("<h2> All Availbile Books </h2>")
})

module.exports=bookroute;
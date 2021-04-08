var express=require('express')
var studroute=express()

//http://localhost:3000/StudentHome
studroute.get('/',(req,res)=>{
    res.send("<h1> Student HomePage </h1>")
})
//http://localhost:3000/StudentHome
studroute.post('/',(req,res)=>{
    res.send("<table> <tr> <th>Student1</th> <th>1811122</th> <th>student2</th> <th>194422</th> <th>Student3</th> <th>1812133</th> </table>")
})
//http://localhost:3000/StudentHome/info
studroute.put('/info',(req,res)=>{
    res.send("Info Table")
})

//http://localhost:3000/StudentHome/info
studroute.delete('/info',(req,res)=>{
    res.send("RECORD DELETED")
})
module.exports=studroute;
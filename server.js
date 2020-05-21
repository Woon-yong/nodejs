var express = require('express')
var app = express()

app.get('/',function(request,response){
    console.log(request)
    response.send("<h1 style='color:red'>Hi</h1>")
} )
//listen(port,url,backlog,callback)
app.listen(8080,function(){
    console.log("server is starting at http://localhost:8080")
} )

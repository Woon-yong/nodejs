var path = require('path')
var bodyParser = require('body-parser')
var apiRouter = require('./routes/apiRouter.js')
var express = require('express')
var app = express()

//default setting--> mean : 'views' folder is template folder
//__dirname : folder path from 'C:\' to 'dapi'
app.set('views',path.join(__dirname+'/views'))
app.set('view engine','ejs') 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//middleware 
//routing process middleware
//app.get('/',function(request,response){
    //response.send("<h1 style='color:red'>Hi</h1>")
    //console.log(request.body)
    //response.render('index')
//} )
app.use('/',apiRouter) 


//listen(port,url,backlog,callback)
app.listen(8080,function(){
    console.log("server is starting at http://localhost:8080")
} )

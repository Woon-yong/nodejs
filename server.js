var path = require('path')
var bodyParser = require('body-parser')
var apiRouter = require('./routes/apiRouter.js')
var api = require('./routes/api1')
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
//'/' 는 인터넷 경로를 지정해주는 것.

app.use('/',api) 
//app.use('/user', api) // 이거 선언하면 localhost:8080/user/daejeon 했을때 api가 호출됨.


//listen(port,url,backlog,callback)
app.listen(8080,function(){
    console.log("server is starting at http://localhost:8080")
} )

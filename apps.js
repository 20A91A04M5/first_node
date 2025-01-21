
var express=require("express")
var mysql2=require("mysql2")
var app=express()

app.use(express.json())

var conn=mysql2.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Suhash@123",
    database:"details"
})

conn.connect((err)=>{
    if(err){
        console.log("error in connection")
    }
    else{
        console.log("Successfully connected...!")
    }
})

app.post('/database',(req,res)=>{
    var {id,username,userpass,usermail}=req.body
    const query="insert into users (id,username,userpass,usermail) values (?,?,?,?)";
    conn.query(query,[id,username,userpass,usermail],(err,data)=>{
        if(err){
            console.log("error")
        }
        else{
            console.log(data)
            res.send(data)
        }
    })
}).listen(3007)


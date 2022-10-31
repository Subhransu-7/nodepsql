const express = require("express")
const bodyParser = require("body-parser")
const db= require('./queries')
const cors=require('cors')

const app=express();
<<<<<<< HEAD
const cors= require('cors')
app.use(cors())
=======
app.use(cors)
>>>>>>> a8aa2020c03d46b2708088dbe4cc217cf71a7e8f
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true,}))

app.listen(3000,()=>{console.log("server running on port 3000.....")})

<<<<<<< HEAD

=======
>>>>>>> a8aa2020c03d46b2708088dbe4cc217cf71a7e8f
app.get('/users',db.getUsers),
app.get('/products/:catagory',db.getProducts)




























// app.get('/users/:id',db.getUserbyId)
// app.post('/users',db.Createuser)
// app.put('/users/:id',db.updateUser)
// app.delete('/users/:id',db.deleteUser)

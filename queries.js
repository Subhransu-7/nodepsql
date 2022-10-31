const pool= require('./pool')
//get all users from database

const getUsers =(req,res)=>{
    pool.query('SELECT * FROM mock_data ORDER BY id ASC',(error,result)=>{
        if (error){
            throw error;
        }

        res.status(200).send(result.rows)
    })
}


const getProducts=(req,res) =>{
    const product= req.params.catagory

    

    pool.query(`SELECT * FROM ${product} ORDER BY id ASC`,(error,result)=>{
        if (error){
            throw error;
        }

        res.status(200).send(result.rows)
    })
}











//get a single user from the database

const getUserbyId=(req,res)=>{
    const id= req.params.id

    pool.query('SELECT * FROM mock_data WHERE id=$1',[id],(error,result)=>{
        if (error){
            throw error
        }
        res.status(200).send(result.rows)
    })
}
//create an user on the db

const Createuser=(req,res)=>{
    const {name,age} = req.body

    pool.query('INSERT INTO users (name,age) VALUES ($1,$2) RETURNING *',[name,age],(error,result)=>{
        if (error){
            throw error
        }
        res.status(201).send(`user created ${result.rows[0].name}`)
    })
}

//update an user from the db
const updateUser=(req,res)=>{
    const id = parseInt(req.param.id)
    const {name, age} = req.body

    pool.query('UPDATE users SET name=$1, age=$2',[name,age],(error,result)=>{
        if (error){
            throw error
        }

        res.status(200).send(`updates for user with id ${id} are ${name} and ${age}`)

    })
}

//delete an user from the db

const deleteUser=(req,res)=>{
    const id=req.param.id

    pool.query('DELETE FROM users WHERE id=$1',[id],(error,result)=>{
        if(error){
            throw error
        }

        res.status(200).send(`user deleted with id ${id}`)
    })
}


module.exports ={
    getUsers,
    getUserbyId,
    Createuser,
    updateUser,
    deleteUser,
    getProducts
}

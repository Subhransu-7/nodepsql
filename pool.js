const { Pool } = require('pg')

const pool= new Pool(
    {
        user:'subha',
        host: 'dpg-cd557gaen0hugpkke9bg-a',
        database:'edb_efaz',
        password:'yigN6t5mtFNg1smmRb8L6OYGPeOBjGIJ',
        port:5432,
    }
)

module.exports=pool

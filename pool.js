const { Pool } = require('pg')

const pool= new Pool(
    {
       postgres://subha:yigN6t5mtFNg1smmRb8L6OYGPeOBjGIJ@dpg-cd557gaen0hugpkke9bg-a/edb_efaz
    }
)

module.exports=pool

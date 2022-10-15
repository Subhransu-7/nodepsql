const { Pool} = require('pg')
const connectionString = 'postgres://subha:yigN6t5mtFNg1smmRb8L6OYGPeOBjGIJ@dpg-cd557gaen0hugpkke9bg-a/edb_efaz'
const pool = new Pool({
  connectionString,
})

module.exports=pool

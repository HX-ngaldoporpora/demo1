const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send("Funciona")
})
app.listen(3001, ()=>{console.log('Server on port 3001')})
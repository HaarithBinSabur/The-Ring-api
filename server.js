const express = require('express')
const app = express()
const cors = require('cors')
const data = require("./data")


const PORT = 8000

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const boxerName = request.params.name.toLowerCase()
    if(boxers[boxerName]){
        response.json(boxers[boxerName])
    }else{
        response.json("Who's That?")
    }
})
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})
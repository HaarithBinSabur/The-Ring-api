const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let boxers = {
    'mike tyson': {
        'nickname': 'Kid Dynamite',
        'type boxer': 'Power-puncher',
        'Record':'50-6-2'
    },
   'floyd mayweather.jr': {
        'nickname' : 'Money Mayweather',
        'type boxer': 'Counter-puncher',
        'Record': '50-0'
    },
    'vasily lomachenko':{
        'nickname': 'Hi-tech',
        'type boxer': 'Tactical-boxer',
        'Record': '15-3'
    },
    'gervonte davis':{
        'nickname': 'Tank',
        'type boxer': 'Power-puncher',
        'Record': '28-0'
    },
    'terrance crawford':{
        'nickname': 'Bud',
        'type boxer':'Switch-Hitter',
        'Record':'37-0'
    }


}
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
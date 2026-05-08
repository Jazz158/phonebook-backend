const express = require ("express")

const app = express()

const data = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get("/api/persons",(request,response) => {

    response.json(data)
})

app.get("/info",(request,response) => {

    response.send((`
    <p>Phonebook has info for ${data.length} people</p>
    <p>${new Date()}</p>
  `))
})

app.get("/api/persons/:id",(request,response) => {

    const id = request.params.id
    const datas = data.find((item) => item.id === id)

    if (datas){
        response.json(datas)

    }else{
        response.status(404).end()
    }
})

const Port = 3001 

app.listen(Port,() => {
    console.log(`Your Port is running ${Port}`)
})
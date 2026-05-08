const express = require("express")

const app = express()
app.use(express.json())

let data = [
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

app.get("/api/persons", (request, response) => {

    response.json(data)
})

app.get("/info", (request, response) => {

    response.send((`
    <p>Phonebook has info for ${data.length} people</p>
    <p>${new Date()}</p>
  `))
})

app.get("/api/persons/:id", (request, response) => {

    const id = request.params.id
    const datas = data.find((item) => item.id === id)

    if (datas) {
        response.json(datas)

    } else {
        response.status(404).end()
    }
})

app.delete("/api/persons/:id", (request, response) => {

    const id = request.params.id
    data = data.filter((item) => item.id !== id)

    response.status(204).end()
})

app.post("/api/persons", (request, response) => {

    const body = request.body
    const exists = data.find(item => item.name === body.name)


if (!body.name || !body.number) {
  return response.status(400).json({ error: 'name or number missing' })
}

if (exists) {
  return response.status(400).json({ error: 'name must be unique' })
}

    const note = {
        name: body.name,
        number: body.number || 0,
        id: Math.random()

    }
data = data.concat(note)  
response.json(note)







})

const Port = 3001

app.listen(Port, () => {
    console.log(`Your Port is running ${Port}`)
})
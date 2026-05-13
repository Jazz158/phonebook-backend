const mongoose = require ("mongoose")


const password = process.argv[2]


const url = `mongodb+srv://jahanzaibk246_db_user:${password}@cluster0.wglf9ho.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`  

mongoose.connect(url,{family : 4})
mongoose.set('strictQuery', false)




const personSchema = new mongoose.Schema({
    name : String,
    number : String
})

const Person = mongoose.model("person",personSchema)

if (process.argv.length === 3 ){
    Person.find({}).then((result) => {
        console.log("Person Phonebook number is :")
        result.forEach((person ) => {
            console.log(`Name is ${person.name} ,number is ${person.number}`)
        })
        mongoose.connection.close()
    })
}

if (process.argv.length === 5 ){
    const name = process.argv[3]
    const number = process.argv[4]

    const person = new Person ({
        name,number
    })

    person.save().then((result)=>{
        console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
    })
}
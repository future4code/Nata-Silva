import express from "express"
import cors from "cors"
import { users } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))


// 1

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

// 2

type typeDaArray = {
    userId: number | string,
    id: number | string,
    title: string,
    completed: boolean
}

// 3

const array: typeDaArray[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 2,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true
  },
  {
    userId: 3,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  }
]

// 4 

app.get("/afazeres", (req, res) => {
  const novoarray = array.filter((user) => {
    if(user.completed === true){
    return user
    }
  });
  res.send(novoarray)
})

// 5 

app.post('/criarafazeres', (req, res) => {
    const {userId, id, title, completed}: typeDaArray = req.body
    array.push({userId, id, title, completed})
    res.send(array)
    // res.status(200).send(array)
})


//6

app.put('/editarAfazeres/:id', (req, res) => {
  const IdDoAFazer = req.params.id;
  const { completed } = req.body
  const mapDoArray: any = array.find(item => item.id == IdDoAFazer)
  mapDoArray.completed = completed
  
  res.send(mapDoArray)
})



// 7

app.delete('/deletarafazeres/:id', (req, res) => {
  const IdDoAFazer = req.params.id;
  const deletar: number = array.findIndex(item => item.id == IdDoAFazer)
    array.splice(deletar, 1)
   return res.status(200).json({ sucess: 'Afazer excluído com sucesso !' })
})

// 8 


app.get("/afazeres/:userId", (req, res) => {
  const { userId } = req.params;
  const novoarray = array.filter((user) => {
    if(user.userId == userId){
    return user
    }
  });
  res.send(novoarray)
})


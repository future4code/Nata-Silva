import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados




let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

// 1
app.get("/users", (req, res) => {
  res.status(200).send(users)
})
// a: get
// b: users

// _________________

// 2
app.get("/users/type", (req, res) => {
  let errorCode = 400
  try {
    const { type } = req.query
    const userAdmin = users.filter((user) => {
      if (user.type === type) {
        return users
      }
    })
    res.send(userAdmin)
  } catch {
    res.status(errorCode).send("usuario nao encontrado")
  }
})
// a: passei pelo query, pq é a forma que funciona
// b: pelo if

// _________________

// 3

app.get("/users/:name", (req, res) => {
  let errorCode = 400
  try {
    const { name } = req.params
    const userName = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase()
    })
    if (!userName) {
      res.status(404).send("Nome não encontrado")
    }
    res.status(200).send(userName)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

//a: O Request parans

// _________________

// 4 

app.post('/users', (req, res) => {
  let errorCode = 400
  try {
    const { id, name, email, type, age } = req.body
    users.push({ id, name, email, type, age })
    res.send(users)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

// A e B: funciona, mas não é o ideal, pq se refazer edita,
// e o objetivo é so criar e nao editar


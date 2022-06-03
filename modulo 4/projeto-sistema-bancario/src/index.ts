import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

// Exercicio

type typeExtrato = {
  valor: number,
  data: Date,
  descrição: string
}

type typeContas = {
  nome: string,
  cpf: number,
  dataNascimento: Date,
  saldo: number
}

const contas = [
  {
    nome: "joao",
    cpf: 77777777788,
    dataNascimento: new Date("1975-10-21"),
    saldo: 1055,
    extrato: [
      {
        valor: 100,
        data: new Date("1975-10-21"),
        descrição: "Enviado"
      }
    ]
  },
  {
    nome: "maria",
    cpf: 77775557788,
    dataNascimento: new Date("1980-12-30"),
    saldo: 3055,
    extrato: [
      {
        valor: 1000,
        data: new Date("2021-10-21"),
        descrição: "Enviado"
      },
      {
        valor: 500,
        data: new Date("2022-04-21"),
        descrição: "Enviado"
      }
    ]
  }
]

app.get("/users", (req, res) => {
  res.status(200).send(contas)
})

app.post("/users", (req, res) => {
  let errorCode = 400
  
  try {
    let saldo: any = 0
    let extrato: any = {}

    const { nome, cpf, dataNascimento } = req.body
    const newDate = new Date(dataNascimento)
    const age: number = Math.floor((Date.now() - newDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    
    if (age < 18) {
      res.status(errorCode).send("voce tem menos de 18")
    }else{
      contas.push({ nome, cpf, dataNascimento, saldo: saldo, extrato: extrato })
      res.send(contas)
    }
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

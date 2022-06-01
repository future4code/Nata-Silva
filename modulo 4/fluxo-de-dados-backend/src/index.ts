import express, { Request, Response } from "express"
import cors from "cors"
import { produtos } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))


// 1
app.get("/test", (req, res) => {          
  res.send("Pong! 🏓")
})

// 2
//feito no data.ts

// 
type user = {
  id: string,
  name: string,
  price: number
}
//

// 3
app.post('/criarproduto', (req, res) => {
  const newID = Date.now().toString()
  const {name, price}: user  = req.body
  produtos.push({id: newID, name, price})
  res.send(produtos)
})

// 4 
app.get("/produtos", (req, res) => {
  const mapProdutos = produtos.map((user: any) => {
    return user
    });
  res.send(mapProdutos)
})

// 5
app.put('/editarPreco/:id', (req, res) => {
  const IdDoProduto = req.params.id;
  const { price } = req.body
  const map = produtos.find((item:user) => item.id === IdDoProduto)
  map.price = price
  res.send(map)
})

// 6 
app.delete('/deletarproduto/:id', (req, res) => {
  const IdDoProduto = req.params.id;
  const deletar: number = produtos.findIndex((item:user) => item.id === IdDoProduto)
  produtos.splice(deletar, 1)
  return res.send(produtos)
})

// 7> Não feito
// 8> Não feito
// 9> Não feito

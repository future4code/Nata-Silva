import app from "./app";
import connection from "./connection";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import moment from "moment"

app.get("/", async (req, res) => {
  const result = await connection.raw(`SELECT * FROM Actor`)
  res.status(200).send(result)
})

// 1

app.post("/user", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, nick, email } = req.body

    const user = {
      id: uuidv4(),
      name,
      nick,
      email
    }

    if (!req.body.name || !req.body.email) {
      throw new Error("Está faltando Campo(s)");
      errorCode = 404
    } else if (req.body.name === "" || req.body.email === "" || req.body.nick === "") {
      throw new Error("Preencha os Campos corretamente");

    } else {
      const result = await connection("users")
        .insert(user);
      res.status(201).send({ user, message: 'Usuário criado com sucesso !' });
    }
  } catch (err: any) {
    res.status(400).send({ message: err.message, });
  }
});

// 2

app.get("/users/:id", async (req, res) => {
  let errorCode = 400
  try {
    const result = await connection("users")
      .select("id", "nick")
      .where({ id: req.params.id })
    res.status(200).send(result)

    if (req.params.id != result[0].id) {
      throw new Error("Id incorreto");
      errorCode = 404
    }
  }
  catch (err) {
    res.status(400).send(err)
  }
})

// 3 


app.put("/users/edit/:id", async (req, res) => {
  let errorCode = 400
  try {

    if (req.body.name === "" || req.body.nick === "") {
      throw new Error("Erro. Preencha os Campos corretamente");
      errorCode = 404
    }
    else {
      const result = await connection("users")
        .update({
          name: req.body.name,
          nick: req.body.nick
        })
        .where({ id: req.params.id })
      res.send("Atualizado com sucesso")
    }
  }
  catch (err) {
    res.status(400).send(err)
  }
})

// 4

app.post("/task", async (req: Request, res: Response) => {
  let errorCode = 400

  moment
  try {
    const { title, description, limitDate, creatorUserId } = req.body
    const dateDiff: number = moment(limitDate, 'DD/MM/YYYY').unix() - moment().unix()
    const task = {
      id: uuidv4(),
      title,
      description,
      limitDate: moment(limitDate, 'DD/MM/YYYY').format("YYYY-MM-DD"),
      creatorUserId
    }
    
    if (req.body.title === "" || req.body.description === "" || req.body.limitDate === "" || req.body.creatorUserId === "") {
      throw new Error("Erro. Preencha os Campos corretamente");
      errorCode = 404
    }else{
      const result = await connection("tasks")
      .insert(task);
      res.status(201).send({ task, message: 'Tarefa criada com sucesso !' });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// 5


app.get("/task/:id", async (req, res) => {
  let errorCode = 400
  try {
    const result = await connection("tasks")
    .where({ id: req.params.id })
    const newResult = {
      ...result[0],
      limitDate: moment(result[0].limitDate).format("DD/MM/YYYY"),
    }
    res.status(200).send(newResult)
  }
  catch (err) {
    res.status(400).send(err)
  }
})

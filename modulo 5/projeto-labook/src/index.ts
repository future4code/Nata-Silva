import { app } from "./app";

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
  })
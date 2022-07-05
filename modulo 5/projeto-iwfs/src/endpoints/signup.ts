import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { User } from "../types/User"

export async function name(req: Request, res: Response) {
    try {
        const {name, email, password, role} = req.body

        if (!name || !email || !password || !role) {
            res.status(422).send("Informações inseridas incorretas")  
        }
        
        const userDataBase = new UserDataBase
        const user = await userDataBase.findUserByeEmail(email)
        if (user) {
            res.status(409).send("Esse email já está cadastrado")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.genetate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User (id, name, email, hashPassword, role)
        await userDataBase.createUser(newUser)
    } catch (error: any) {
        res.status(400).send(error.message);
    }
}
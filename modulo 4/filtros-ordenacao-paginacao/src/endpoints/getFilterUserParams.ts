import { Request, Response } from "express"
import { connection } from "../data/connection";


export async function getFilterUserParams( req: Request, res: Response): Promise<void> {
    try {
       const result = await connection.raw(`
       SELECT * FROM aula48_exercicio WHERE name LIKE "%${req.params.name}%"
       `)
       res.status(200).send(result[0])
 
    } catch (error: any) {
       res.status(400).send(error.message || error)
    }
 }
 
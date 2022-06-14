import { Response, Request } from 'express'
import { connection } from "../data/connection"

export const getFilterUserByOrder = async (req: Request, res: Response): Promise<void> => {
    try {

        let orderByName = req.query.name
        let orderByType = req.query.type


        if (!orderByName && !orderByType) {
            const result = await connection('aula48_exercicio').orderBy('email', 'asc')
            res.status(200).send(result)
        }
        const result = await connection('aula48_exercicio')
            .where('name', 'like', `%${orderByName}%`).or.where('type', 'like', `%${orderByType}%`)
            .orderBy('name', 'asc')

        if (!result.length) {
            res.status(401).send({ message: 'Erro ao buscar usuário' })
        }

        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.send(error)
    }
} 


import { Response, Request } from 'express'
import { connection } from "../data/connection"

export const getByUserLimit = async (req: Request, res: Response): Promise<void> => {
    try {

        const { page }: any = req.query
        const size = 5

        const limit = (page - 1) * size;

        const result = await connection('aula48_exercicio')
            .select('*')
            .limit(size)
            .offset(limit)


        if (!result.length) {
            res.status(401).send({ message: 'Erro ao buscar usuário' })
        }

        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.send(error)
    }
} 
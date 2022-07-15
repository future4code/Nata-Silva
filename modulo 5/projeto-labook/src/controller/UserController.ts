import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { loginInputDTO } from "../types/loginInputDTO";
import { UserInputDTO } from "../types/userInputDTO";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    signUp = async (req: Request, res: Response) => {
        try {

            const { name, email, password } = req.body

            const user: UserInputDTO = {
                name,
                email,
                password
            }

            const token = await this.userBusiness.signUp(user)

            res.status(201).send({ token })
        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }

    }

    login = async (req: Request, res: Response) => {
        try {

            const { email, password } = req.body

            const user: loginInputDTO = {
                email,
                password
            }

            const token = await this.userBusiness.login(user)

            res.status(200).send({ token })
            
        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}
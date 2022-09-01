import * as jwt from "jsonwebtoken"
import { AuthenticateData } from "../Models/AuthenticateData"

const secretKey = process.env.SECRET_KEY as string

export class Authenticator {
    generateToken = (id:AuthenticateData) => {
        return jwt.sign(
            id,
            secretKey,

            {
                expiresIn: "1h"
            }
        )
    }

    getTokenData = (token: string):AuthenticateData => {
        return jwt.verify(token,secretKey) as AuthenticateData
    }

}
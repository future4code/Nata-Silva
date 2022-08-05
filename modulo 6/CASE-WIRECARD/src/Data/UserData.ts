import { User } from "../Models/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserData extends BaseDatabase {
    signup = async (user:User) => {
        await this.connection("User_wirecard")
        .insert({
            id:user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            cpf: user.cpf
        })
    }

    selecUserByEmail = async (email:string) => {
         try {

            const response = await this.connection("User_wirecard")
            .where({email:email})

            return response[0]

        } catch (error:any) {
            throw new Error(error.message);

        }
    }
} 
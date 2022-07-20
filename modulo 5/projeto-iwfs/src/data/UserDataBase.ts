import { BaseDataBase } from "./BaseDataBase";
import { User } from "../types/User";

export class UserDataBase extends BaseDataBase {
    public async createUser (user: User){
        try {
            await BaseDataBase.connection("userr")
            .insert({
                id: user.getID,
                name: user.getName,
                email: user.getEmail,
                password: user.getPassword,
                role: user.getRole
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }



    public async findUserByeEmail(email: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection("userr")
            .select("*")
            .where({email: email})

            return User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
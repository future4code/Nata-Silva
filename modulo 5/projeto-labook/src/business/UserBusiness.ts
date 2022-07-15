import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { loginInputDTO } from "../types/loginInputDTO";
import { UserInputDTO } from "../types/userInputDTO";

export class UserBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private userDatabase: UserDatabase,
        private authenticator: Authenticator
    ) {}
    signUp = async (user: UserInputDTO) => {
        try {
            
            const { name, email, password } = user

            if (!name || !email || !password) {
                throw new Error("Porfavor insira um dos dados mencionados no body")
            }

            if (password.length < 6) {
                throw new Error("A senha precisa ter 6 ou mais caracteres!")
            }

            const id = this.idGenerator.generate()

            const cryptedPassword = this.hashManager.createHash(password)

            const newUser = new User(id, name, email, cryptedPassword)

            await this.userDatabase.signUp(newUser)

            const token = this.authenticator.generateToken({email, id})

            return token

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    login = async (user: loginInputDTO) => {
        try {

            const { email, password } = user

            if ( !email || !password ) {
                throw new Error("Porfavor insira um dos dados mencionados no body, nome e senha!")
            }

            const userFromDB = await this.userDatabase.selectUserByEmail(email)

            if (!userFromDB) {
                throw new Error(`E-mail não cadastrado!`)
            }

            const isPasswordCorrect = this.hashManager.compareHash(password, userFromDB.getPassword())

            if (!isPasswordCorrect) {
                throw new Error(`Senha inválida!`)
            }

            const token = this.authenticator.generateToken({email: userFromDB.getEmail(), id: userFromDB.getId()})

            return token

            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
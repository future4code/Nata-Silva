import { UserData } from "../Data/UserData";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerate } from "../Services/IdGenerate.1";


const idGenerate = new IdGenerate()
const authenticator = new Authenticator()
const hashManager = new HashManager()
const userData = new UserData()

export class UserBusiness {
    signup = async (name:string, email:string, password:string, cpf:string) =>{

        if(!name){
            throw new Error("Enter a name");   
        }

        if(!email){
            throw new Error("Enter an email");   

        }else if(email.indexOf("@") === -1){
            throw new Error("The email must contain an @");  
        }

        if(!password){
            throw new Error("Enter a password");

        }else if(password.length < 6){
            throw new Error("The password must be longer than 6 characteres");
        }

        if(!cpf){
            throw new Error("Enter a cpf");      

        }else if(cpf.length < 11){
            throw new Error("invalid cpf, must contain 11 digits"); 

        }else if(cpf.length > 11){
            throw new Error("invalid cpf, must contain 11 digits");
        }


        const id = idGenerate.generateId()
        const hashPassword = await hashManager.hash(password)


        await userData.signup({
            id:id,
            name: name,
            email: email,
            password: hashPassword,
            cpf: cpf
        })

        const user = await userData.selecUserByEmail(email)

        const token = authenticator.generateToken({id:user.id})

        return token
    }

    login = async (email: string, password:string) => {

        if(!email){
            throw new Error("Enter a email");

        }else if(email.indexOf("@") === -1){
            throw new Error("The email must contain an @");
        }

        if(!password){
            throw new Error("Enter a password");   
        }

        const user = await userData.selecUserByEmail(email)

        const token = authenticator.generateToken({id:user.id})

        return token

    }
} 
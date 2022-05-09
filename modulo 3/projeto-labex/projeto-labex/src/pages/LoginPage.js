import React from "react";
import { useNavigate } from "react-router-dom";
import {goToBack} from "../routes/cordenates"

export const LoginPage = () => {
    const navigate = useNavigate()
    
    const admin = () => {
        navigate("/admin")
    }

    return (
        <div>
                <h2>Login</h2>   
                <input placeholder="E-mail" type="email" name="email" required="" value=""/>
                <br/>
                <input placeholder="Senha" type="password" name="password" required="" value=""/>
                <br/>
                <button onClick={()=>goToBack(navigate)}>Voltar</button>
                <button onClick={admin}>Entrar</button>
        </div>
    );

}
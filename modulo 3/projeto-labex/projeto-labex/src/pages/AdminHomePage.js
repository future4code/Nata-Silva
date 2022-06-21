import React from "react";
import { useNavigate } from "react-router-dom";
import {goToBack} from "../routes/cordenates"


export const AdminHomePage = () => {
    const navigate = useNavigate()
    
    const createViajens = () => {
        navigate("/createViagens")
    }
    const goToLogin = () => {
        navigate("/login")
    }



    return (
        <div>
            <p>Area de Admin</p>
            <button onClick={()=>goToBack(navigate)}>Voltar</button>
            <button onClick={createViajens}>Criar Viagem</button>
            <button onClick={goToLogin}>Logout</button>
        </div>
    );

}
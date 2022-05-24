import React from "react";
import { useNavigate } from "react-router-dom"
import {goToBack} from "../routes/cordenates"


export const CreateTripPage = () => {
    const navigate = useNavigate()


    return (
        <div>
            <p>Criar Viagens</p>
            <button onClick={()=>goToBack(navigate)}>Voltar</button>
        </div>
    );

}
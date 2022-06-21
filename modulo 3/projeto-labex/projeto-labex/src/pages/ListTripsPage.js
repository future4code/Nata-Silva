import React from "react";
import { useNavigate } from "react-router-dom";
import {goToBack} from "../routes/cordenates"

export const ListTripsPage = () => {
    const navigate = useNavigate()
    
    const goToform = () => {
        navigate("/formpage")
    }

    return (
        <div>
            <p>Area da Lista</p>
            <button onClick={()=>goToBack(navigate)}>Voltar</button>
            <button onClick={goToform}>Inscrever-se</button>
        </div>
    );

}
import React from "react";
import { useNavigate } from "react-router-dom";
import {goToBack} from "../routes/cordenates"


export const TripDetrailsPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={()=>goToBack(navigate)}>Voltar</button>
        </div>
    );

}
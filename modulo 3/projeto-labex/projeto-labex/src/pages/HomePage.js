import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate()

    const goToViajens = () => {
        navigate("/viagens")
    }
    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <div>
        <header>
            <h1>LabeX</h1>
            <h4>O Melhor Lugar Pra Viajar, no Espaço</h4>
           <button onClick={goToViajens}>Ver Viajens</button> 
           <button onClick={goToLogin}>Área de Admin</button> 
        </header>
        </div>
    );

}
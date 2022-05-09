import React from "react"
import { voltar, irPraFeed } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material";

export default function Cadastro() {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <img src="" />
                <button> Entrar</button>
            </div>
            <div>
                <h3>Olá, Bem Vindas ao LabEddit ;)</h3>
                <TextField type="name" placeholder="Nome de Usuario" required />
                <TextField type="email" placeholder="E-mail" required />
                <TextField type="password" placeholder="Senha" required />
            </div>
            <div>
                <br/>
                <p>Ao Continuar, voce concorda com o nosso Contrato de Usuario e nossa Politica de Privacidade</p>
                <input type="checkbox" required/> Concordo Com os termos de uso
                <br/>
                <Button>Cadastrar</Button>
            </div>

            <button onClick={() => voltar(navigate)}>Voltar</button>
        </div>
    )
}
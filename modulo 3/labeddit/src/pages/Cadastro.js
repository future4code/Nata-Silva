import React from "react"
import { voltar, irPraFeed } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material";
import { useForms } from "../hooks/useForms";
import axios from "axios";

export default function Cadastro() {
    const navigate = useNavigate()
    const [form, onChange] = useForms({nome: "", email:"", senha:""})

    const postarCadastro = () => {

        const body = {
            "username": form.nome,
            "email": form.email,
            "password": form.senha
        }
        const url = "https://labeddit.herokuapp.com/users/signup"

        axios
            .post(url, body)
            .then((res) => {
                window.localStorage.setItem("token", res.data.token)
                irPraFeed(navigate)
            })
            .catch((err)=>{alert("Erro Tente Novamente")})
    }

    return (
        <div>
            <div>
                <img src="" />
                <button> Entrar </button>
                <h3>Olá, Bem Vindas ao LabEddit ;)</h3>
            </div>
            <div>
                <TextField 
                name="nome"
                type="nome"
                label="Nome de Usuario"
                variant="outlined"
                value={form.nome} 
                onChange={onChange} 
                 />

                <TextField 
                type="email" 
                name="email"
                label="E-mail" 
                variant="outlined" 
                value={form.email} 
                onChange={onChange} 
                 />

                <TextField 
                type="password" 
                name="senha"
                label="Senha"
                variant="outlined" 
                value={form.senha} 
                onChange={onChange} 
                pattern={"^.{8,30}"}
                title={"sua senha deve ter no minimo 8 caracteres é no maximo 30"}
                 />
            </div>
            <div>
                <br/>
                <p>Ao Continuar, voce concorda com o nosso Contrato de Usuario e nossa Politica de Privacidade</p>
                <input type="checkbox" /> Concordo Com os termos de uso
                <br/>
                <Button onClick={() => postarCadastro()}>Cadastrar</Button>
            </div>

            <button onClick={() => voltar(navigate)}>Voltar</button>
        </div>
    )
}
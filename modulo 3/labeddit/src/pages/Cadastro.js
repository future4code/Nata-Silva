import React from "react"
import { voltar, irPraFeed } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material";
import { useForms } from "../hooks/useForms";
import axios from "axios";
import logo from "../imgs/Logo.png"
import styled from "styled-components"


const MainContainer = styled.div `
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3{
        text-align: center;
        color: #bb62de;
        margin-bottom: 10px;
    }

`
const Logo = styled.img `
    margin-top: 20%;
    width: 50vh;
    margin-left : 5vh;
`
const Botoes = styled.button `
    width: 90vw;
    margin-bottom: 40%;
`

const Termos = styled.div `
    text-align: center;
`




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
        <MainContainer>
            <div>
                <Logo src={logo} />
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
                <br/>
                <TextField 
                type="email" 
                name="email"
                label="E-mail" 
                variant="outlined" 
                value={form.email} 
                onChange={onChange} 
                 />
                <br/>
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
            <Termos>
                <br/>
                <p>Ao Continuar, voce concorda com o nosso Contrato de Usuario e nossa Politica de Privacidade</p>
                <input type="checkbox" /> Gostaria de Receber Emails e Novidades
                <br/>
                <Botoes>
                    <Button onClick={() => voltar(navigate)}>Voltar</Button>
                    <Button onClick={() => postarCadastro()}>Cadastrar</Button>
                </Botoes>
            </Termos>
        </MainContainer>
    )
}
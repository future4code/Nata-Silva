import React from "react";
import { irPraCadastro, irPraFeed } from "../routes/coordinator"
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
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




export default function Login() {
    const navigate = useNavigate()
    const [form, onChange] = useForms({ email: "", senha: "" })


    const postarLogin = (event) => {
        event.preventDefault()
        const body = {
            "email": form.email,
            "password": form.senha
        }
        const url = "https://labeddit.herokuapp.com/users/login"

        axios
            .post(url, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                irPraFeed(navigate)
            })
            .catch((err) => { alert("Email ou Senha Incorreta, tem certeza que está cadastrado?") })
    }

    

    return (
        <MainContainer>
            <div>
                <Logo src={logo} />
                <h3>O Projeto de Rede Social da Labenu</h3>
            </div>

            <Box component={"form"} onSubmit={postarLogin}>
                <TextField
                    name="email"
                    type="email"
                    variant="filled"
                    label="Email"
                    value={form.email}
                    onChange={onChange}
                    sx={{ width: "90vw", mb: "10px" }} />
                <br />
                <TextField
                    name="senha"
                    type="password"
                    variant="filled"
                    label="Senha"
                    value={form.senha}
                    onChange={onChange}
                    sx={{ width: "90vw", mb: "10px" }} />
                <br />
                <Botoes>
                    <Button type="submit" sx={{ "&:hover": { backgroundColor: "#439ea1", color: "black" } }}>Continuar</Button>
                    <Button onClick={() => irPraCadastro(navigate)} sx={{ "&:hover": { backgroundColor: "#439ea1", color: "black" } }}>Criar Uma conta</Button>
                </Botoes>
            </Box>

        </MainContainer >
    )
}

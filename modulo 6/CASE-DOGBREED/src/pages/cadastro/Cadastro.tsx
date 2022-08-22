import { TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api";
import { ButtonDIV, H1, Input, MainContainer } from "./style";
import logo from "../../img/logo.png"

export default function Cadastro() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const emailValue = (event:any) => {
        setEmail(event.target.value)
    }

    const postCriarRegistro = async () => {
        const body = {
            email
        }


        try {

            const response = await api.post(`register`, body)
            navigate('/')
            window.localStorage.setItem('token', response.data.user.token)
            alert('Cadastro criado com sucesso')

        } catch (error: any) {
            console.log(error.response);
            alert('Erro ao criar cadastro/logar.')
        }
    }


    useEffect(() => {
    }, [])


    return (
        <MainContainer>
            <Input>
            <H1>Cadastro / Login</H1>
            <TextField sx={{ marginBottom: '20px' }} label="Email"
                value={email}
                onChange={emailValue}
            />
            </Input>
            <ButtonDIV>
            <Button variant="contained" onClick={postCriarRegistro} type={`submit`}>Entrar</Button>
            </ButtonDIV>
            
        </MainContainer>
    )

}
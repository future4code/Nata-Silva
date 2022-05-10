import React from "react";
import { irPraCadastro, irPraFeed } from "../routes/coordinator"
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { useForms } from "../hooks/useForms";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate()
    const [form, onChange] = useForms({ email: "", senha: "" })


    const postarLogin = () => {

        const body = {
            "email": form.email,
            "password": form.senha
        }
        const url = "https://labeddit.herokuapp.com/users/login"

        axios
            .post(url, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                console.log(res.data.token)
                irPraFeed(navigate)
            })
            .catch((err) => { alert("Email ou Senha Incorreta, tem certeza que está cadastrado?") })
    }
    return (
        <div>
            <div>
                <h1>LabEddit</h1>
                <p>O Projeto de Rede Social da Labenu</p>
            </div>

            <Box>
                <TextField
                    name="email"
                    type="email"
                    variant="filled"
                    label="Email"
                    value={form.email}
                    onChange={onChange}
                    sx={{ width: "60vh", mb: "10px" }} />
                <br />
                <TextField
                    name="senha"
                    type="password"
                    variant="filled"
                    label="Senha"
                    value={form.senha}
                    onChange={onChange}
                    sx={{ width: "60vh", mb: "10px" }} />
            </Box>
            <br />
            <div>
                <Button onClick={() => postarLogin()} sx={{ "&:hover": { backgroundColor: "#439ea1", color: "black" } }}>Continuar</Button>
                <Button onClick={() => irPraCadastro(navigate)} sx={{ "&:hover": { backgroundColor: "#439ea1", color: "black" } }}>Criar Uma conta</Button>
            </div>

        </div >
    )
}

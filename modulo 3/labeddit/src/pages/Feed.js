import React, { useState, useEffect } from "react"
import { voltar } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useForms } from "../hooks/useForms";
import { CardFeed } from "../components/CardFeed";
import { useProtectedPage } from "../hooks/useProtect";
import { Box, Button, TextField } from "@mui/material";
import { postRequest, getRequest, botaoLike, botaoDeslike } from "../services/requests";
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import logo from "../imgs/Logo.png"
import styled from "styled-components"


const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #f7f5f7;
`


const Menu = styled.div`
background-color:  #f4f4f4 ;
display: flex;
justify-content: space-between;

img {
    width: 12vh;
    margin-left: 15px;
}
button {
    border:none;
    color: gray;
    margin-right: 15px;
}
`
const Boxx = styled(Box)`
    background-color: #f1e6f5;
    width: 100%;

`

const Cards = styled.div `
    border: 1px double;
    border-radius: 10px;
    margin-top: 8px;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`







export default function Feed() {
    useProtectedPage()

    const navigate = useNavigate()
    const [post, setPost] = useState([])
    const [form, onChange, clean] = useForms({ titulo: "", body: "" })

    const deslogar = () => {
        window.localStorage.removeItem('token')
        navigate("/")
    }

    const criarPosts = (event) => {
        event.preventDefault()
        const body = {
            "title": form.titulo,
            "body": form.body
        }
        postRequest("posts", body, setPost, clean)

    }

    const pegarPosts = () => {
        getRequest("posts", setPost)
    }
    console.log(post)
    useEffect(() => {
        pegarPosts()
    }, [])



    return (
        <div>
            <Menu>
                <img src={logo} />
                <button onClick={deslogar}> Logout </button>
            </Menu>
            <MainContainer>
                <Boxx 
                component={"form"} 
                onSubmit={criarPosts}
                >
                    <TextField
                        sx={{ width: "60vw", mb: "10px", ml: "20vw", mt:"10px" }}
                        variant="filled"
                        label="Titulo do Post"
                        value={form.titulo}
                        onChange={onChange}
                        name="titulo"
                    ></TextField>
                    <br/>
                    <TextField
                        sx={{ width: "60vw", mb: "10px", ml: "20vw" }}
                        variant="filled"
                        label="Escreva Seu Post..."
                        value={form.body}
                        onChange={onChange}
                        name="body"
                    ></TextField>
                    <br/>
                    <Button 
                    type="submit" 
                    sx={{ "&:hover": { backgroundColor: "#439ea1", color: "black" }, marginLeft: "45%", mb:"10px" }} 
                    > Postar </Button>

                </Boxx>

                <div>
                {  post.length > 0 ?

                    post.map((post) => {
                        return (
                            <Cards>
                                <CardFeed
                                    username={post.username}
                                    title={post.title}
                                    body={post.body}
                                    voteSum={post.voteSum}
                                    commentCount={post.commentCount}
                                    id={post.id}
                                />
                                <div>
                                <ArrowUpwardOutlinedIcon
                                    sx={{ color: post.userVote == 1 ? "green" : "black"}}
                                    onClick={() => botaoLike(post.userVote, post.id, "posts", setPost, "posts")}
                                /> 
                                <ArrowDownwardOutlinedIcon
                                    sx={{ color: post.userVote == -1 ? "red" : "black" }}
                                    onClick={() => botaoDeslike(post.userVote, post.id, "posts", setPost, "posts")}
                                />
                                <br />
                                </div>
                            </Cards>
                        )
                    })
                    : <p>Carregando...</p>
                }
                </div>
            </MainContainer>
        </div>
    )
}
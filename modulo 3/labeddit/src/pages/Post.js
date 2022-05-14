import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { irPraFeed } from "../routes/coordinator"
import axios from "axios"
import { CardFeed } from "../components/CardFeed";
import { useForms } from "../hooks/useForms";
import { useProtectedPage } from "../hooks/useProtect";
import { Box, Button, TextField } from "@mui/material";
import { postRequest, getRequest, botaoLike, botaoDeslike } from "../services/requests"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import styled from "styled-components";
import logo from "../imgs/Logo.png"

const MainContainer = styled.div`
display: flex;
flex-direction: column;
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

`
const BotaoMenu = styled.div`
    border:none;
    color: gray;
    margin-right: 15px;
    margin-top: 8px;
`

const Cards = styled.div`
    border: 1px double;
    border-radius: 10px;
    margin-top: 8px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 6vw;
`



const MapDosCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export default function Post() {
    useProtectedPage()



    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const postId = useParams()
    const [form, onChange, clean] = useForms({ body: "" })

    const deslogar = () => {
        window.localStorage.removeItem('token')
        navigate("/")
    }

    // Função de Criar Comentarios nos posts
    const filtraPost = (posts) => {
        console.log(posts)
        return posts.find((post) => post.id === postId.id)
    }


    const pegarPosts = () => {
        getRequest("posts", setPost)
    }


    // Função de Criar Comentarios nos posts
    const criarComentario = (event) => {
        event.preventDefault()

        const body = {
            "body": form.body
        }
        postRequest(`posts/${postId.id}/comments`, body, setComments, clean)

    }


    const pegarComentarios = (id) => {
        getRequest(`posts/${id}/comments`, setComments)
    }


    useEffect(() => {
        pegarPosts()
        postId && pegarComentarios(postId.id)
    }, [postId])
    useEffect(() => {
        post.length > 0 && setPost(filtraPost(post))
    }, [post])

    return (
        <MainContainer>
            <Menu>
                <img src={logo} />
                <div>
                    <BotaoMenu onClick={() => irPraFeed(navigate)}>Voltar</BotaoMenu>
                    <BotaoMenu onClick={deslogar}> Logout </BotaoMenu>
                </div>
            </Menu>
            <br />
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
                        sx={{ color: post.userVote == 1 ? "green" : "black" }}
                        onClick={() => botaoLike(post.userVote, post.id, "posts", setPost, "posts")}
                    >like</ArrowUpwardOutlinedIcon>
                    <ArrowDownwardOutlinedIcon
                        sx={{ color: post.userVote == -1 ? "red" : "black" }}
                        onClick={() => botaoDeslike(post.userVote, post.id, "posts", setPost, "posts")}
                    >deslike</ArrowDownwardOutlinedIcon>
                </div>
            </Cards>


            <Box sx={{textAlign: "center"}} component={"form"} onSubmit={criarComentario}>
                <TextField
                    sx={{ width: "80vw", mb: "10px"}}
                    variant="filled"
                    label="Comentario"
                    value={form.body}
                    onChange={onChange}
                    name="body"
                />
                <br/>
                <Button type="submit"> Enviar </Button>
            </Box>

            <MapDosCards>
            {  comments.length > 0 ?
         
                comments.map((comment) => {

                    return (
                        <Cards>
                            <p>{comment.username}</p>
                            <h3>{comment.body}</h3>
                            <p>{comment.voteSum}</p>
                            <div>
                                <ArrowUpwardOutlinedIcon
                                    sx={{ color: comment.userVote == 1 ? "green" : "black" }}
                                    onClick={() => botaoLike(comment.userVote, comment.id, `comments`, setComments, `posts/${postId.id}/comments`)}
                                >like</ArrowUpwardOutlinedIcon>
                                <ArrowDownwardOutlinedIcon
                                    sx={{ color: comment.userVote == -1 ? "red" : "black" }}
                                    onClick={() => botaoDeslike(comment.userVote, comment.id, `comments`, setComments, `posts/${postId.id}/comments`)}
                                >deslike</ArrowDownwardOutlinedIcon>
                            </div>
                        </Cards>
                    )
                })
                : <p>Carregando...</p>

            }
            </MapDosCards>

        </MainContainer>

    )
}
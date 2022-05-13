import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { irPraFeed } from "../routes/coordinator"
import axios from "axios"
import { CardFeed } from "../components/CardFeed";
import { useForms } from "../hooks/useForms";
import { useProtectedPage } from "../hooks/useProtect";
import { Box, Button, TextField } from "@mui/material";
import {postRequest, getRequest, botaoLike, botaoDeslike} from "../services/requests"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';



export default function Post() {
    useProtectedPage()



    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const postId = useParams()
    const [form, onChange, clean] = useForms({ body: "" })
console.log(postId.id);

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
    postRequest(`posts/${postId.id}/comments`, body, setComments)
    
    }


    const pegarComentarios = (id) => {
        getRequest(`posts/${id}/comments`, setComments)
    }

    useEffect(() => {
        pegarPosts()
        postId && pegarComentarios(postId.id)
    }, [postId])

    useEffect(() => {
       post.length>0 && setPost( filtraPost(post))
    }, [post] )

    return (
        <div>
            <div>
                <button onClick={() => irPraFeed(navigate)}>Voltar</button>
                <img src="" />
                <button onClick={deslogar}> Logout </button>
            </div>
            <br />
            <CardFeed
                username={post.username}
                title={post.title}
                body={post.body}
                voteSum={post.voteSum}
                commentCount={post.commentCount}
                id={post.id}
            />
            <ArrowUpwardOutlinedIcon 
            sx={{ color: post.userVote == 1 ? "green" : "black"}} 
            onClick={() => botaoLike(post.userVote, post.id, "posts", setPost, "posts")}
            >like</ArrowUpwardOutlinedIcon>
            <ArrowDownwardOutlinedIcon 
            sx={{ color: post.userVote == -1 ? "red" : "black"}} 
            onClick={() => botaoDeslike(post.userVote, post.id, "posts", setPost, "posts")}
            >deslike</ArrowDownwardOutlinedIcon>



            <Box component={"form"} onSubmit={criarComentario}>
                <TextField
                    placeholder="Comentario"
                    value={form.body}
                    onChange={onChange}
                    name="body"
                />
                <Button type="submit"> Enviar </Button>
            </Box>


            {comments.map((comment) => {

                return (
                    <div>
                        <p>{comment.username}</p>
                        <h3>{comment.body}</h3>
                        <p>{comment.voteSum}</p>
                        <ArrowUpwardOutlinedIcon 
                        sx={{ color: comment.userVote == 1 ? "green" : "black"}} 
                        onClick={() => botaoLike(comment.userVote, comment.id, `comments`,setComments, `posts/${postId.id}/comments`)}
                        >like</ArrowUpwardOutlinedIcon>
                        <ArrowDownwardOutlinedIcon 
                        sx={{ color: comment.userVote == -1 ? "red" : "black"}} 
                        onClick={() => botaoDeslike(comment.userVote, comment.id,`comments` , setComments,`posts/${postId.id}/comments`)}
                        >deslike</ArrowDownwardOutlinedIcon>
                       
                    </div>
                )
            })}


        </div>

    )
}
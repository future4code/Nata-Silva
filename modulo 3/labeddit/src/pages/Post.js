import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { irPraFeed } from "../routes/coordinator"
import axios from "axios"
import { CardFeed } from "../components/CardFeed";
import { useForms } from "../hooks/useForms";
import { useProtectedPage } from "../hooks/useProtect";
import { Box, Button, TextField } from "@mui/material";


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
        return posts.find((post) => post.id === postId.id)
    }
    const pegarPosts = () => {
        const url = "https://labeddit.herokuapp.com/posts"
        const token = window.localStorage.getItem('token')

        axios
            .get(url, {
                headers: {
                    Authorization: token
                }
            })
            .then((res) => {
                const arrayPost = filtraPost(res.data)
                setPost(arrayPost)
            })
            .catch((err) => { alert(err.response.data) })
    }
    
    // Função de Criar Comentarios nos posts
    const criarComentario = (event) => {
        event.preventDefault()

        const url = `https://labeddit.herokuapp.com/posts/${postId.id}/comments`
        const body = {
            "body": form.body
        }
        const token = window.localStorage.getItem('token')
        axios
        .post(url, body,
            {
                headers: {
                    Authorization: token
                }
            })
            .then((res) => {
                pegarPosts()
                pegarComentarios(postId.id)
                clean()
            })
            .catch((err) => { alert("Erro, tente novamente") })
            
        }
        
        
        const pegarComentarios = (id) => {
            const url = `https://labeddit.herokuapp.com/posts/${id}/comments`
            const token = window.localStorage.getItem('token')
            
            axios
            .get(url, {
                headers: {
                    Authorization: token
                }
            })
            .then((res) => {
                setComments(res.data)
             
            })
            .catch((err) => { alert(err.response.data) })
        }
        
        useEffect(() => {
            pegarPosts()
            pegarComentarios(postId.id)
        }, [])

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
                        </div>
                    )
                })}

        </div>

    )
}
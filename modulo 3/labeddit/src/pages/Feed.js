import React, { useState, useEffect } from "react"
import { voltar } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useForms } from "../hooks/useForms";
import { CardFeed } from "../components/CardFeed";
import { useProtectedPage } from "../hooks/useProtect";
import { Box, Button, TextField } from "@mui/material";

export default function Feed() {
    useProtectedPage()
    
    const navigate = useNavigate()
    const [post, setPost] = useState([])
    const [form, onChange, clean] = useForms({ titulo: "", body: "" })


    const deslogar = () => {
        window.localStorage.removeItem('token')
        navigate("/")
    }
    
    const criarPosts = () => {
        const url = "https://labeddit.herokuapp.com/posts"
        const body = {
            "title": form.titulo,
            "body": form.body
        }
        const token = window.localStorage.getItem('token')
        const headers = {
            Authorization: token
        }
        axios
            .post(url, body,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then((res) => {
                pegarPosts()
                clean()
            })
            .catch((err) => { alert(err.response) })

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
                setPost(res.data)
            })
            .catch((err) => { alert(err.response.data) })
    }

    useEffect(() => {
        pegarPosts()
    }, [])

    return (
        <div>
            <div>
                <img src="" />
                <button onClick={deslogar}> Logout </button>
            </div>

            <Box component={"form"} onSubmit={criarPosts}>
                <TextField 
                    placeholder="Titulo do Post"
                    value={form.titulo}
                    onChange={onChange}
                    name="titulo"
                ></TextField>
                <br />
                <TextField 
                    placeholder="Escreva Seu Post..."
                    value={form.body}
                    onChange={onChange}
                    name="body"
                ></TextField>
                <br />
                <Button type="submit" sx={{ "&:hover": { backgroundColor: "#439ea1", color: "black" } }} > Postar </Button>
                <p>________________________________</p>
            </Box>

            <div>
                {post.map((post) => {
                    return (
                        <CardFeed
                            username={post.username}
                            title={post.title}
                            body={post.body}
                            voteSum={post.voteSum}
                            commentCount={post.commentCount}
                            id={post.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}
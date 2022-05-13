import { useNavigate } from "react-router-dom"
import { goToPostPage } from "../routes/coordinator"
import styled from "styled-components"
import axios from "axios"
import { Button, CardActions, CardContent, Typography } from "@mui/material"


const MainContainer = styled.div`
cursor: pointer;
background-color: dargray;
margin-bottom: 5px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

export const CardFeed = (props) => {
    const navigate = useNavigate()





    return (

        <MainContainer>
            <CardContent onClick={()=>goToPostPage(navigate, props.id)}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Enviado por: {props.username}
                </Typography>
                <Typography variant="body2">
                    Titulo: {props.title}
                    <br/>
                </Typography>
                <Typography variant="h5" component="div">
                    {props.body}
                </Typography>
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                </Typography> */}
            </CardContent>
            
            <CardActions>
                 ⇧({props.voteSum})⇩  | 💬 ( {props.commentCount} )
            </CardActions>
        </MainContainer>

    )
}

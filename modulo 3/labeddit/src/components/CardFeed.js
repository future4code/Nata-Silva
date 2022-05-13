import { useNavigate } from "react-router-dom"
import { goToPostPage } from "../routes/coordinator"
import styled from "styled-components"
import axios from "axios"

const MainContainer = styled.div `
cursor: pointer;
background-color: dargray;
margin-bottom: 5px;
`

export const CardFeed = (props) => {
    const  navigate = useNavigate()
    
  



    return (
        <MainContainer onClick={()=>goToPostPage(navigate, props.id)}>
            <p>Eviado Por: {props.username}</p>
            <p>Titulo:{props.title}</p>
            <h3>{props.body}</h3>
            <button> ↕ {props.voteSum} </button>
            <button>Comentarios: {props.commentCount}</button>
            
        </MainContainer>
    )
}

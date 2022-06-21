import React from "react";
import CriarPlaylist from "./CriarPlaylist";
import styled from "styled-components";


const MainContainer = styled.div`
color: #ffffff;
background-color: #121212;


  display: flex;
  height: 100vh;
  width: 100vw;
  background-size: cover
`


const Menu = styled.div`
background-color: #000000;
width: 40vh;
`

const VerAPlaylist = styled.div`
margin: 20px 0 0 30px;
`


export default class VerPlaylist extends React.Component {

    render() {
        return (
            <MainContainer>
                <Menu>
                    <h1>Labefy</h1>

                    <h4>Sua Plataforma de Playlists personalizadas</h4>
                    <br />
                    <button onClick={this.props.irCriarPLaylist}>Pagina Inicial</button>
                    <br />
                    <button onClick={this.props.irCriarPLaylist}>Voltar </button>
                </Menu>

                <VerAPlaylist>
                    {this.props.listaDePlaylists}
                </VerAPlaylist>

            </MainContainer>
        )

    }

}
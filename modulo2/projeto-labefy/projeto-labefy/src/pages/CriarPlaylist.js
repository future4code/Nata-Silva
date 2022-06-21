import React from "react";
import axios from "axios";
import styled from "styled-components"
import { render } from "@testing-library/react";


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

const PlaylistsECriar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
width: 80%;
`
const CriadorPlaylist = styled.div`
display: flex;
flex-direction: column;
`
const PlaylistsFeitas = styled.div`
margin: 20px 0px 0px 20px;
button {
    border-radius: 4px;
    background-color: #4d4d4d ;
    color: white
}

`
export const ScrollContainer = styled.div`
    width: 100%;
    height:70%;
    overflow: auto;
    flex: none;
    flex-flow: column nowrap;
    overflow-y: scroll;
`




const headers = {
    headers: {
        Authorization: "nata-silva-shaw"
    }
}

export default class CriarPlaylist extends React.Component {
    state = {
        playlists: [],
        playlist: "",
    }


    //o que já inicia com o site
    componentDidMount = () => {
        this.getPlaylist()
    }
    //adicionar texto a string
    adicionarAPlaylist = (event) => {
        this.setState({ playlist: event.target.value })
    }
    // pegar playlist pra poder jogar na tela   
    getPlaylist = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        await axios.get(url, headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list });
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }
    //adicionar a string a array
    adicionarAArray = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.playlist
        }
        axios
            .post(url, body, headers)

            .then((res) => {
                alert("Lista Adicionada")
                this.setState({ playlist: "" });
                this.getPlaylist()
            })
            .catch((err) => {
                alert("ERRO   Tente novamente")
            })

    }
    //deletar a playlist
    deletarplaylist = (playlists) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlists.id}`


        if (
            window.confirm(
                `Tem certeza que deseja deletar a playlist ${playlists.name}?`
            )
        ) {
            axios
                .delete(url, headers)
                .then((res) => {
                    alert(`A playlist ${playlists.name} foi deletado!`);
                    this.getPlaylist()
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        } else {
            alert(`Playlist não deletada`);
        }
    };



    render() {

        let mapeamento
        if (this.state.playlists.length > 0) {
            mapeamento = this.state.playlists.map((playlist) => {
                return (
                    <PlaylistsFeitas
                        key={playlist.id}>
                        <h3>Playlist: "{playlist.name}"</h3>
                        <button
                            key={playlist.id}
                            onClick={() => this.props.irParaPlaylist(playlist.id, playlist.name)}
                        >
                             Acessar Playlist 
                        </button>

                        <button onClick={() => this.deletarplaylist(playlist)}>
                            X 
                        </button>
                    </PlaylistsFeitas>
                )
            })
        } else {
            mapeamento = <p> Carregando... </p>
        }
        return (

            <div>

                <MainContainer>

                    <Menu>
                        <h1>Labefy</h1>

                        <h4>Sua Plataforma de Playlists personalizadas</h4>
                        <button onClick={() => this.props.irParaVerPlaylist(mapeamento)}>Playlists Feitas</button>
                        <br/>
                        <button onClick={this.props.irCriarPLaylist}>Pagina Inicial</button>
                    </Menu>

                    <PlaylistsECriar>
                        <ScrollContainer>
                            {mapeamento}
                        </ScrollContainer>


                        <CriadorPlaylist>
                            <h3>Criar Playlists</h3>
                            <br/>
                            <label>Nome da Nova Playlist: </label>
                            <input
                                placeholder="Brega/Funk do Recife"
                                value={this.state.playlist}
                                onChange={this.adicionarAPlaylist}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        this.adicionarAArray(this.state.playlist)
                                    }
                                }}
                            />
                            <button onClick={() => this.adicionarAArray(this.state.playlist)}> Salvar </button>
                        </CriadorPlaylist>
                    </PlaylistsECriar>


                </MainContainer>
            </div>
        )
    }

}
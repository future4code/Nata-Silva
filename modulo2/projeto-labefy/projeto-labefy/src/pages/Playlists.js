import React from "react";
import axios from "axios"
import styled from "styled-components";

const headers = {
    headers: {
        Authorization: "nata-silva-shaw"
    }
}


const MainContainer = styled.div`
color: #ffffff;
background-color: #121212;

display: flex;
  flex-grow: 1;
  height: 100vh;
  width: 100vw;
`

const Menu = styled.div`
background-color: #000000;
width: 40vh;
`

const MusicasECriar = styled.div`
width: 65%;
margin: 20px 0px 0px 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Musicas = styled.div`
font-size: 15px;
`

export const ScrollContainer = styled.div`
    width: 100%;
    height:70%;
    overflow: auto;
    flex: none;
    flex-flow: column nowrap;
    overflow-y: scroll;
`













export default class Playlists extends React.Component {
    state = {
        musicas: [],

        nomeDaMusica: "",
        nomeDoArtista: "",
        nomeURL: ""
    }

    componentDidMount = () => {
        this.pegarMusica(this.props.id)
    }
    adicionarNome = (event) => {
        this.setState({ nomeDaMusica: event.target.value })
    }
    adicionarArtista = (event) => {
        this.setState({ nomeDoArtista: event.target.value })
    }
    adicionarUrl = (event) => {
        this.setState({ nomeURL: event.target.value })
    }


    pegarMusica = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        await axios.get(url, headers)
            .then((res) => {
                this.setState({ musicas: res.data.result.tracks });
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }



    adicionarMusica = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.nomeDaMusica,
            artist: this.state.nomeDoArtista,
            url: this.state.nomeURL
        }
        axios
            .post(url, body, headers)

            .then((res) => {
                alert("Musica Adicionada")
                this.setState({ nomeDaMusica: "", nomeDoArtista: "", nomeURL: "" });
                this.pegarMusica(id)
            })
            .catch((err) => {
                alert("ERRO   Tente novamente")
            })

    }

    deletarMusica = (musicas) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${musicas.id}`


        if (
            window.confirm(
                `Tem certeza que deseja deletar a playlist ${musicas.name}?`
            )
        ) {
            axios
                .delete(url, headers)
                .then((res) => {
                    alert(`A Musica ${musicas.name} foi deletada!`);
                    this.pegarMusica(this.props.id)
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        } else {
            alert(`Musica não deletada`);
        }
    };




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



                <MusicasECriar>
                    <ScrollContainer>
                        <h2>Playlist: <strong>{this.props.name}</strong></h2>
                        <br/>
                        {this.state.musicas.length > 0 ? this.state.musicas.map((musica) => {
                            return (
                                <Musicas key={musica.id}>
                                    <p>
                                        <h3>{musica.name} - {musica.artist}</h3>
                                        <audio controls src={musica.url} type="audio/mp3" ></audio>
                                        <br/>
                                        <button onClick={() => this.deletarMusica(musica)}> Deletar </button>
                                    </p>
                                </Musicas>
                            )
                        }) : <p>...</p>}
                    </ScrollContainer>



                    <div>
                        <h3>Adicionar Musica a playlist</h3>
                        <label>Nome da Musica: </label>
                        <input
                            placeholder="Musica"
                            value={this.state.nomeDaMusica}
                            onChange={this.adicionarNome} />
                        <br />
                        <label>Nome do Artista/Banda: </label>
                        <input
                            placeholder="Artista"
                            value={this.state.nomeDoArtista}
                            onChange={this.adicionarArtista}
                        />
                        <br />
                        <label>URL da Musica: </label>
                        <input
                            placeholder="https://link.com"
                            value={this.state.nomeURL}
                            onChange={this.adicionarUrl}
                            onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        this.adicionarMusica(this.props.id)
                                    }
                                }}
                        />
                        <br />
                        <button onClick={() => this.adicionarMusica(this.props.id)} >Salvar</button>
                    </div>
                </MusicasECriar>

            </MainContainer >
        )

    }

}
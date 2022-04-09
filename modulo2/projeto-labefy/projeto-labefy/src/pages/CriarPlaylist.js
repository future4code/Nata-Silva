import React from "react";
import axios from "axios";
import styled from "styled-components"


const MainContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction:column;
  margin: 20px 0;
  /* box-shadow: 3px 3px 4px 2px grey;
  border-radius: 10px; */
`;

const DivPlaylist = styled.div` 
   display: flex;
   align-items: flex-start;
   align-content: space-around;
   label {
       align-items: center;
       margin-top: 2px;
       padding:0px 5px 0px 5px;
   }
   input {
       align-items: center;
       background: azure;
       padding-right: 10%;
   }
   button {
       align-items: center;
       background-color: azure;
   }
`;

const DivImpressao = styled.div` 
background-color: black;
   
`;



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
    //  componentDidUpdate = () => {
    //     this.getPlaylist()
    // }

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
            alert(`Usuário não deletado`);
        }
    };



    render() {

        let mapeamento
        if (this.state.playlists.length > 0) {
            mapeamento = this.state.playlists.map((playlist) => {
                return (
                    <div>
                        <p>
                            <h3>{playlist.name}</h3>
                            <button
                                key={playlist.id}
                                onClick={() => this.props.irParaPlaylist(playlist.id)}
                            >
                                Acessar Playlist
                            </button>

                            <button onClick={() => this.deletarplaylist(playlist)}>
                                Deletar
                            </button>
                        </p>
                    </div>
                )
            })
        } else {
            mapeamento = <p> Carregando... </p>
        }
        return (
            <div>
                <MainContainer>
                    <DivPlaylist>
                        <label>Nome da Playlist: </label>
                        <input
                            placeholder="Brega/Funk do Recife"
                            value={this.state.playlist}
                            onChange={this.adicionarAPlaylist}
                        />
                        <button onClick={() => this.adicionarAArray(this.state.playlist)}> Salvar </button>
                    </DivPlaylist>
                    <div>
                    {mapeamento}
                    </div>

                </MainContainer>
            </div>
        )
    }

}
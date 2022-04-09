import React from "react";
import axios from "axios"

const headers = {
    headers: {
        Authorization: "nata-silva-shaw"
    }
}




export default class Playlists extends React.Component {
    state = {
        playlist: {},
        nomeDaPlaylist: ""

    }

    componentDidMount() {
        this.pegarPlaylistAi()
    }

    pegarPlaylistAi = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, headers)
            .then((res) => this.setState({ nomeDaPlaylist: res.data}))
            .catch((err) => console.log(err.response))
    }

    render() {
        console.log(this.state.playlist)
        return (
            <div>
                <p> Playlist: {this.state.nomeDaPlaylist.name}</p>
                <button onClick={this.props.irCriarPLaylist}>
                    Voltar
                </button>
            </div>
        )

    }

}
import React from "react"
import axios from "axios"




const headers = {
    headers: {
        Authorization: "nata-silva-shaw"
    }
}



export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }   


    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, headers)
            .then((res) => {
                alert("Usuário(a) cadastrado(a) com sucesso!")
                this.setState({ nome: "", email: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    render() {
        return (
            <div>


                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                <h2>Cadastro</h2>
                <input
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.onChangeNome}
                />
                <input
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.fazerCadastro()
                        }
                    }}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}
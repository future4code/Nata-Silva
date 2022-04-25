import { useEffect, useState } from "react"
import axios from "axios"

const TelaPerfil = (props) => {
    const [perfil, setPerfil] = useState({})
    const [atualiza, setAtualiza] = useState(false)


    useEffect(() => {
        getPerfil()
    }, [atualiza])



    const getPerfil = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nata-silva-shaw/person`)
            .then((res) => {
                setPerfil(res.data.profile)
            })
            .catch((err) => {
                alert(err.response.data)
            })

    }

    const choosePerson = (id) => {
        const body = {
            id: id,
            choice: true
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nata-silva-shaw/choose-person`, body)
            .then((res) => {
                setAtualiza(!atualiza)
            })
            .catch((err) => {
            })
    }

    const noChoosePerson = (id) => {
        const body = {
            id: id,
            choice: false
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nata-silva-shaw/choose-person`, body)
            .then((res) => {
                setAtualiza(!atualiza)
            })
            .catch((err) => {
            })
    }

    return (
        <div>
            <div>
                <img width={200} src={perfil.photo} alt={perfil.name} />
                <p>{perfil.name}, {perfil.age}</p>
                <p>{perfil.bio}</p>
                <button onClick={() => { noChoosePerson(perfil.id) }}>❌</button>
                <button onClick={() => { choosePerson(perfil.id) }}>❤️</button>
            </div>
            {/* aa */}
        </div>
    )
}

export default TelaPerfil;
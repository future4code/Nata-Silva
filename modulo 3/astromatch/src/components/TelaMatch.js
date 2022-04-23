import {useState, useEffect} from "react"
import axios from 'axios'

const TelaMatch = (props) => {
    const [match, setMatch] = useState({})

    
    useEffect(() => {
        getMatch()
    }, [])




    const getMatch = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nata-silva-shaw/matches`)
            .then((res) => {
                setMatch(res.data.profile)
            })
            .catch((err) => {
                alert(err.response.data)
            })

    }

    console.log(match)
    return(
        <div>
           <p>Tela de Match</p>

           <button onClick={() => {""}}>🧹</button>
        </div>
        )

}
export default TelaMatch;
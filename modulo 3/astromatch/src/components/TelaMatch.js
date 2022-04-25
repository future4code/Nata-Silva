import {useState, useEffect} from "react"
import axios from 'axios'

const TelaMatch = () => {
    const [match, setMatch] = useState([])

    
    useEffect(() => {
        getMatch()
    }, [])




    const getMatch = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nata-silva-shaw/matches`)
            .then((res) => {
                setMatch(res.data.matches)
            })
            .catch((err) => {
                alert(err.response.data)
            })

    }

    let mapeamento
    if(match != []){
        mapeamento = match.map((match)=>{
        return (
            <div>
                <p>{match.name}, {match.age}</p>
                <p>{match.bio}</p>
                <p>-------------------------</p>
            </div>

        )
    })}else{
        mapeamento = <p>Sem Matches</p>
    }



    return(
        <div>
           <p>Tela de Match</p>
            {mapeamento}
           <button onClick={() => {""}}>🧹</button>
        </div>
        )

}
export default TelaMatch;
import axios from "axios"
const BASE_URL = "https://labeddit.herokuapp.com"



export const postRequest = (endpoint, body, setData, clean) => {
    const token = window.localStorage.getItem('token')
    const headers = {
        headers: {
            Authorization: token
        }
    }
    axios
        .post(`${BASE_URL}/${endpoint}`, body, headers)
        .then((res) => {
            getRequest(endpoint, setData )
            clean()
            console.log("ok⇩")
        })
        .catch((err) => { alert(err.response) })

}

export const getRequest = (endpoint, setData) => {
    const token = window.localStorage.getItem('token')
    const headers = {
        headers: {
            Authorization: token
        }
    }
    axios
        .get(`${BASE_URL}/${endpoint}`, headers  )
        .then((res) => {
            setData(res.data)

        })
        .catch((err) => { console.log(err.response) })
}


// Logica dos Botões

export const botaoLike = (userVote, postId, endpoint, setData, endpointGet) => {
    if (userVote === 1) {
        likeEDeslikeEdelete(postId, 0 ,endpoint, setData, endpointGet)
    } else {
        likeEDeslikeEdelete(postId, 1, endpoint, setData, endpointGet)
    }
}

export const botaoDeslike = (userVote, postId, endpoint, setData, endpointGet) => {
    if (userVote === -1) {
        likeEDeslikeEdelete(postId, 0 ,endpoint, setData, endpointGet)
    } else {
        likeEDeslikeEdelete(postId, -1, endpoint, setData, endpointGet)
    }
}

export const likeEDeslikeEdelete = (postId, direction, endpoint, setData, endpointGet) => {
    const url = `${BASE_URL}/${endpoint}/${postId}/votes`
    const token = window.localStorage.getItem('token')
    const body = {
        "direction": direction
    }

    if (direction === 1) {
        axios.post(url, body, {
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                getRequest(endpointGet, setData)
            })
            .catch(error => {
                alert({ error })
            })
    } else if (direction === -1) {
        axios.put(url, body, {
            headers: {
                Authorization: token
            }
        })
            .then(resp => {
                getRequest(endpointGet, setData)
            })
            .catch(error => {
                alert({ error })
            })
    } else {
        axios.delete(url, {
            headers: {
                Authorization: token
            }
        })
            .then(resp => {
                getRequest(endpointGet, setData)
            })
            .catch(error => {
                alert({ error })
            })
    }
}










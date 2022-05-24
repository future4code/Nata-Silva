import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { irParaLogin } from "../routes/coordinator"


export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            irParaLogin(navigate)
        }
    }, [])
}
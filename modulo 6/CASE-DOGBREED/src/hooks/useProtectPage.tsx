import { useEffect } from "react";
import {useNavigate} from "react-router-dom"


export const UseProtectPage = () =>{
   const navigate = useNavigate()

   useEffect(()=>{
    const token = localStorage.getItem('token')
    console.log(token);
    if(token === null || undefined ){
        navigate('/cadastro')
    }

   },[])
}

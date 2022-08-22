import { AppBar } from '@mui/material'
import react from 'react'
import styled from 'styled-components'


export const Main = styled.div `
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: center;
background-color: #e7edff;
`
export const LOGO = styled.div `
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: center;
background-color: #c4d3ff;
`
export const Menu = styled.div `
display: flex;
justify-content: space-around;
text-align: center;
background-color: #c8d5fc7d;
justify-content: space-between;
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
  margin-left: 10%;
  margin-right: 10%;
} 

`

export const Images = styled.div `
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }

} 
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: center;
background-color: #e7edff;
 width: 500;
 height: 450;
 overflow-y:'scroll';
margin-left: 10%;
margin-right: 10%;

`

export const H1 = styled.h1 `
font-family: 'Courier New', Courier, monospace;
font-weight: bold;
background-color: #e7edff;
font-weight: bold;
text-transform: uppercase;
`
export const H2 = styled.h1 `
font-family: 'Courier New', Courier, monospace;
font-weight: bold;
background-color: #e7edff;
text-transform: capitalize
`

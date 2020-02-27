import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { FlightLand } from 'styled-icons/material/FlightLand'
import { Calendar } from 'styled-icons/icomoon/Calendar'
import { AttachMoney } from 'styled-icons/material/AttachMoney'
import { FlightTakeoff } from 'styled-icons/material/FlightTakeoff'
import Tegra from './Tegra.png'

//Initial Css
const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background: #fff;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: sans-serif;
    }
`;
//End Initial Css

//icons//

export const IconAirUp = styled(FlightLand)`
    height: 20px;
    width:  20px;
    color: blue;
`

export const IconAir = styled(FlightLand)`
    height: 30px;
    width:50px;
    color: #FFF;
    margin: 50 0px;
    margin-left:50px;
`

export const IconDate = styled(Calendar)`
    height:20px;
    width:40px;
    color: blue;
`
export const IconMoney = styled(AttachMoney)`
    height:20px;
    width:20px;
    color: green;
`

export const IconAirDown = styled(FlightTakeoff)`
    height:20px;
    width:20px;
    color: red;
`



// end icons//


export const StyleHeader = styled.div`
    background-color: #BD1109;
    position: fixed;
    width:100%;
    span {
        color: #fff;
        font-size: 1em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        
    }
`
export const StyleContainer = styled.div`
    display: flex;
    align-items:flex-end;
    justify-content: center;
    height: 500px;
    width:100%;
    background-image: linear-gradient( rgba(255,255,255,.8) 0%,rgba(255,255,255,.8) 100%), url(${Tegra});
    background-repeat:no-repeat;
    background-position-y: -20px;
    background-position-x: center;
    background-size: 400px;
`

export const StyleMenuBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    margin-bottom: 60px;

    select,input{
        -webkit-appearance: none;  
        -moz-appearance: none; 
        appearance: none; 
        background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat #eeeeee;  /* Imagem de fundo (Seta) */
        background-position: 288px center;  
        width:320px; 
        border:1px solid #ddd;
        margin: 0 10px;
        height:30px;  
    }

    input {
        width:90%;
    }
`

export const StyleMain = styled.div`
    height:auto;
 
    h1 {
        text-align: center;
        margin-bottom:20px ;
    }

    p {
        text-align: center;
        font-size: 30px;
        color: red;
    }
`

export const StyleChecked = styled.div`
    display: flex;
    width: 700px;
    align-items:center;
    justify-content:center;
    margin-bottom: 40px;
    label {
        margin: 10px;
        font-size: 1.5em;
    }
    input{
        height: 20px;
        width:20px;
    }
    p {
      font-size: 2.5em;
      color:#BD1109;  
    }

    
`
export const StyleSelect = styled.div`
    display:flex;
    flex-direction: column;
    span{
        font-size:1em;
        margin: 5px 10px;
        display:flex;
    }
`


export const StyleList = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   margin:20px 10%;
     ul{
         box-shadow: 2px 1px 2px 1px #ccc;
         width:400px;
         list-style:none;
         margin:20px;
         background-color: #ffff;
         padding:10px;
       
    }

    li{ 
        margin-top:10px;
        justify-content: space-between;
        display:flex;
        box-shadow: 0px 2px #ccc;
        padding:5px;
    }

    span{
        color: #BD1109
    }
`
export const StyleButton = styled.button`
    height: 40px;
    width: 100px;
    background-color: #BD1109;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 10px;
    margin-top:30px;
`

export default GlobalStyle;


import Plus_Button from "./img/Plus Button.svg"
import { Link } from "react-scroll"
import React  from 'react';

function Plus(){
    function eventoPlus(){
}
    return(
            <Link  to="menina" spy={true} smooth={true} offset={50} duration={500} >
            <img src = {Plus_Button} onChange={eventoPlus}></img></Link>)
}
export default Plus
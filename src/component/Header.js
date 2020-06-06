import React from "react"
import rectangle from './rectangle.svg'

const Header = () =>{
    return(<div class="header">                           
    <img id="logo" src={require('./logo.jpg')} alt="header picture"/>
    <img id="rect1" src={rectangle}></img>
    <img id="rect2" src={rectangle}></img>
    <img id="rect3" src={rectangle}></img>
    <img id="rect4" src={rectangle}></img>
    <img id="rect5" src={rectangle}></img>
    <img id="rect6" src={rectangle}></img>
</div>)
}

export default Header;
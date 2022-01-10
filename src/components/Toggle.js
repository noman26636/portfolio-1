import React, { useContext } from 'react'
import "./Toggle.css"
import Sun from "../img/sun.png"
import Moon from "../img/moon.png"
import { ThemeContext } from '../context';

function Toggle() {
    
    const theme= useContext(ThemeContext);

    const handleClick = () =>{
        theme.dispatch({type: "TOGGLE"})
    }

    return (
        <div className='toggle'>
            <img className='toggle-image' src={Sun} alt="" />
            <img className='toggle-image' src={Moon} alt="" />
            <div className='toggle-button' onClick={handleClick} style={{left : theme.state.darkMode ? 0 : 25}}>
    
            </div>
        </div>
    )
}

export default Toggle

import React from "react";
import './AcivatePremiumButton.css'


const ToggleThemeButton=( props)=>{
    return(
       
            <button className="active-button-dashboard" onClick={props.onClick}>
               Toggle Theme
            </button>

    )
}

export default ToggleThemeButton;
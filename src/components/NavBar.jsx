import React from "react";

export default function NavBar({onHome}) {

    const goToHome = () => {
        onHome();
    } 

    return (
        <nav className="nav">
            <div className="div-img">
                <img className="imagen-inicio" src={require('./Rick_and_Morty.png')} onClick={goToHome} alt=""/>
            </div>
        </nav>
    )
}
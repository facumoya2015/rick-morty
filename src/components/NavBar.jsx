import React from "react";

export default function NavBar({onHome}) {

    const goToHome = () => {
        onHome();
    } 

    return (
        <nav className="nav">
            <div>
                <img className="imagen-inicio" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" onClick={goToHome}/>
            </div>
        </nav>
    )
}
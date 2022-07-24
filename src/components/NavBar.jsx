import React from "react";

export default function NavBar({onHome}) {

    const goToHome = () => {
        onHome();
    } 

    return (
        <nav>
            <div>
                <h2 onClick={goToHome}>Home</h2>
            </div>
        </nav>
    )
}
import React from "react";

const Button = ({ prev, next, onPrevious, onNext }) => {

    const goToPrevious = () => {
        onPrevious();
    }

    const goToNext = () => {
        onNext();
    }

    const clickPrev = () => {
        goToPrevious();
        window.scrollTo(0, 0)
    }

    const clickNext = () => {
        goToNext();
        window.scrollTo(0, 0)
    }

    return (
        <nav className="buttons">
            {prev ? (
                // <button className="button" onClick={clickPrev} >Previous</button>
                <img src={require("./prev.png")} alt="" className="left" onClick={clickPrev}/>
            ) : null}
            {next ? (
                // <button className="button" onClick={clickNext}>Next</button>
                <img src={require("./next.png")} alt="" className="right" onClick={clickNext}/>
            ) : null}
        </nav>
    )
}

export default Button
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
                <button className="button" onClick={clickPrev} >Previous</button>
            ) : null}
            {next ? (
                <button className="button" onClick={clickNext}>Next</button>
            ) : null}
        </nav>
    )
}

export default Button
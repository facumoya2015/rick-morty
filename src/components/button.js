import React from "react";

const Button = ({prev, next, onPrevious, onNext }) => {

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
        <nav>
            <ul className="buttons">
                {prev ? (
                    <li>
                        <button className="button" onClick={clickPrev} >Previous</button>
                    </li>
                ) : null}
                {next ? (
                    <li>
                        <button className="button" onClick={clickNext}>Next</button>
                    </li>
                ) : null}
            </ul>
        </nav>
    )
}

export default Button
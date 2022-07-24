import React from "react";

const Button = ({prev, next, onPrevious, onNext }) => {

    const goToPrevious = () => {
        onPrevious();
    }

    const goToNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul>
                {prev ? (
                    <li>
                        <button onClick={goToPrevious}>Previous</button>
                    </li>
                ) : null}
                {next ? (
                    <li>
                        <button onClick={goToNext}>Next</button>
                    </li>
                ) : null}
            </ul>
        </nav>
    )
}

export default Button
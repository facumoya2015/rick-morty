import React from "react";

const Characters = ({characters}) => {
    return (
        <div className="container">
            {characters.map((item, index) => (
                <div className="card" key={index}>
                    <img src={item.image} alt="" />
                    <div>
                        <h2 className="name shown">{item.name}</h2>
                        <div className="not-shown">gender: {item.gender}</div>
                        <div className="not-shown">species: {item.species}</div>
                        <div className="not-shown">status: {item.status}</div>
                        <div className="not-shown">origin: {item.origin.name}</div>
                        <div className="not-shown">location: {item.location.name}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Characters
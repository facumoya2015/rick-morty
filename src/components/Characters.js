import React from "react";

const Characters = ({ characters }) => {
    return (
        <div className="container">
            {characters.map((item, index) => (
                <div className="card" key={index}>
                    <h2 className="card-name">{item.name}</h2>
                    <div className="card-content">
                        <img className="card-img" src={item.image} alt="" />
                        <div className="card-info">
                            <div className="info">gender: {item.gender}</div>
                            <div className="info">species: {item.species}</div>
                            <div className="info">status: {item.status}</div>
                            <div className="info">origin: {item.origin.name}</div>
                            <div className="info">location: {item.location.name}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Characters
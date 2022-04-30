import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                        <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">
                                Some quick example to show text on cards
                            </p>
                            <a href="/" className="btn btn-primary">Go Somewhere</a>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Card;
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-full">
                <figure className="px-10 pt-10">
                    <img src={img} />
                </figure>
                <div className="card-body 
                ">
                    <h2 className="card-title">{title}</h2>
                    <p>Price :  {price}</p>
                    <div className="card-actions">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;
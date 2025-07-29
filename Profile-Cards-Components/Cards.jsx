import React from 'react';


const Cards = (props) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-4">
            <img src={props['prof-pic']} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
            <h2 className="text-xl font-bold">{props.name}</h2>
            <p className="text-gray-600">Age: {props.age}</p>
            <p className="text-gray-600">City: {props.city}</p>
            <p className="text-gray-600">Profession: {props.prof}</p>
        </div>
    );
}
export default Cards;
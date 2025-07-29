import React from 'react';


const Card = (props) => {
    return (
        <div className="p-4 align-items-center">
        <div className="mr-7 bg-white text-black inline-block p-6 text-center rounded">
            <img src={props['profPic']} alt="Profile" className="block mx-auto h-32 w-32 rounded-full mb-3" />
            <h2 className="text-xl font-bold">{props.name}</h2>
            <p className="text-gray-600">Age: {props.age}</p>
            <p className="text-gray-600">City: {props.city}</p>
            <p className="text-gray-600">Profession: {props.prof}</p>
        </div>
        </div>
    );
}
export default Card;
import React from 'react';

// Card Component: Renders a single user card.
// The image class was changed from "ml-8" to "block mx-auto" to properly center it.
const Card = (props) => {
    return (
        <div className="mr-4 mb-4 bg-white text-black inline-block p-6 text-center rounded-lg shadow-md w-64">
            <img 
                src={props.profPic} 
                alt={`Profile of ${props.name}`} 
                className="block mx-auto h-32 w-32 rounded-full mb-3 object-cover border-4 border-gray-200" 
            />
            <h2 className="text-xl font-bold">{props.name}</h2>
            <p className="text-gray-600">Age: {props.age}</p>
            <p className="text-gray-600">City: {props.city}</p>
            <p className="text-gray-600">Profession: {props.prof}</p>
        </div>
    );
}
export default Card;
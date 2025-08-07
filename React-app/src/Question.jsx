//CHALLENGE : // Create a Single Question component
//
// In this lab, let us create the Single question component. Edit the file Question.jsx and make sure of the following things:

// The component should receive a prop called title
// This prop should be displayed inside the <h2> element in the component.
// Example:
// <Question title="something" />
// should render something inside h2 element.
// Import the data from data.js file inside App.jsx file. (Hint: import data from ‘./data.js’)
// Inside <section className=”info”>, map on this data and use the Question.jsx component above to display the questions.
// Note: Here’s a helpful guide on using .map with React components
// Consider an array with the following values:

// const arr = ['Hello World', 'My Name is', 'Mehul Mohan']
// You can display them in React using JSX as follows:

// const MyComponent = () => {
//    return <div>{arr.map(stringValue => {
//        return <h1>{stringValue}</h1>
//    })}</div>
// }
import React, { useState } from "react";
const SingleQuestion = ({ title }) => {
  return (
    <div className="question">
      <h2>{title}</h2>;
    </div>
  );
};

export default SingleQuestion;



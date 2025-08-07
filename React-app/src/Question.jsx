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
//

// CHALLENGE(ii) : Adding answers to questions
// In this lab, let us add answers to the SingleQuestion component. Edit the file Question.jsx and make sure of the following things:

// The component should now receive props called title and info
// The UI for the SingleQuestion should look like:
// <article className='question'>
// 	<header>
// 	<h4>{title}</h4>
// 	<button className='btn'>
// 		+
// 	</button>
// 	</header>
// 	<p>{info}</p>
// </article>
//
//CHALLENGE(iii) : Expanding and collapsing answers
// In this lab, make the application as follows:

// By default, no info of questions should be visible.
// If I click on the + button of a question, info for that question should be visible.
// On clicking + button, it should change into - and vice versa.
// On clicking - button, the info should become invisible.
// Hints:
// Have a useState variable as a boolean value (say, visible) inside your every SingleQuestion component.
// Conditionally show and hide the <p>{info}</p> with JSX.
// Do the same with symbol
// }

import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleVisibility}>
          {isVisible ? "-" : "+"}
        </button>
      </header>
      {isVisible && <p>{info}</p>}
    </article>
  );
};

export default Question;

//App component for Cards

//import Card from "./Card"
// const App = () => {
//   // User data array.
//   const users = [
//     {
//       "profile-pic":
//         "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
//       name: "Aarav Sharma",
//       age: 28,
//       city: "Mumbai",
//       profession: "Software Engineer",
//     },
//     {
//       "profile-pic":
//         "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
//       name: "Sanya Singh",
//       age: 34,
//       city: "Delhi",
//       profession: "Graphic Designer",
//     },
//     {
//       "profile-pic":
//         "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
//       name: "Vikram Patel",
//       age: 45,
//       city: "Ahmedabad",
//       profession: "Architect",
//     },
//     {
//       "profile-pic":
//         "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
//       name: "Priya Reddy",
//       age: 29,
//       city: "Hyderabad",
//       profession: "Doctor",
//     },
//     {
//       "profile-pic":
//         "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
//       name: "Rohan Gupta",
//       age: 31,
//       city: "Bengaluru",
//       profession: "Marketing Manager",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen font-sans">
//       <div className="p-10 text-center">
//         <h1 className="text-4xl font-bold mb-8">User Profiles</h1>
//         <div className="flex flex-wrap justify-center">
//           {/* Map through the users array to create a Card for each user.
//                       The key "profile-pic" contains a hyphen, so we must use bracket notation `user['profile-pic']`
//                       instead of dot notation `user.profile-pic`.
//                     */}
//           {users.map((user, index) => (
//             <Card
//               key={index}
//               profPic={user["profile-pic"]}
//               name={user.name}
//               age={user.age}
//               prof={user.profession}
//               city={user.city}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

//App component for API calling
// import React from "react";
// import axios from "axios";
// import { useState } from "react";
// export const App = () => {
//   const [data, setData] = useState([])
//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10");
//     setData(response.data);
//   };
//   return <div>
//     <button onClick={getData} className="bg-teal-700 text-black font-semibold text-2xl px-6 py-4 m-7 rounded active:scale-90">Click</button>
//     <div className="bg-gray-50 ">Hello</div>
//     {data.map(function (elem, idx) {
//       return <div key={idx} className="bg-gray items-center justify-content text-black">
//         <img src={elem.download_url} className="h-40" />
//       </div>
//     })}
//   </div>;
// };

//App Component for Routers
// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import { Home } from './RoutersComp/Home'
// import { Contact } from './RoutersComp/Contact'
// import { About } from './RoutersComp/About'
// import { Profile } from './RoutersComp/Profile'
// import { Header } from './RoutersComp/Header'
// export const App = () => {
//     return (
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     );
// }

//Random quote generator
// import React from 'react'
// import { useState } from 'react';
// let quotes = [
//   "The only limit to our realization of tomorrow is our doubts of today.",
//   "The future belongs to those who believe in the beauty of their dreams.",
//   "In the end, we will remember not the words of our enemies, but the silence of our friends.",
//   "Life is what happens when you're busy making other plans.",
//   "Get busy living or get busy dying."
// ];
// const App = () => {
//   const [quote, setQuote] = useState(quotes[0])
//   let randomize = () => {
//      const randomquote = quotes[Math.floor((Math.random()* quotes.length))]
//       setQuote(randomquote);
//   }
//   return (
//     <div className='text-white bg-gray-900 h-screen flex flex-col items-center justify-center px-50 py-40'>
//       <div className='bg-gray-600 px-15 py-5 font-semibold rounded'>{quote}</div>
//        <button onClick={randomize} className='bg-green-600 px-6 py-3 mt-2 rounded active:scale-90'>Click</button>
//     </div>

//   )
// }

//Todo App
// import React, { useState } from "react";
// function App() {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState([]);
//   function addItem(e) {
//     e.preventDefault();
//     if (task.trim() === "") {
//       alert("Enter a task first");
//       return;
//     }
//     setTodos([...todos, task]);
//     setTask("");
//   }

//   function deleteItem(index) {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   }

//   return (
//     <div className="bg-gray-800 min-h-screen text-white font-sans">
//       <h2>To-do App</h2>
//       <div className="bg-gray-800 min-h-screen flex items-center justify-center rounded ">
//         <form
//           onSubmit={addItem}
//           className="text-white bg-gray-900 flex flex-col items-center justify-center px-50 py-40 "
//         >
//           <input
//             className="bg-gray-600 px-15 py-5 font-semibold rounded border-1 capitalize "
//             type="text"
//             placeholder="Write a todo..."
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//           />
//           <button
//             className="bg-green-700 px-4 py-3 mt-3 rounded font-semibold active:scale-90"
//             type="submit"
//           >
//             Add To-do
//           </button>
//           <ul className="mt-5 capitalize w-full space-y-2 list-decimal list-inside overflow-y-auto max-h-80">
//             {todos.map((todo, index) => (
//               <li
//                 key={index}
//                 className="mr-4 flex justify-between list-decimal items-center bg-gray-700 px-4 py-2 rounded"
//               >
//                 {index + 1}.{" " + todo}
//                 <button
//                   className="ml-2 px-2 py-2 bg-red-600 rounded active:scale-90"
//                   onClick={() => deleteItem(index)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </form>
//       </div>
//     </div>
//   );
// }


//Single Question Component
//Note : This component accepts css from AppSingleQ.css file and from index.css where it may be commented out.
// Uncomment it if you want to use the css from index.css file.
// import React, { useState } from "react";
// import data from "./data";
// import SingleQuestion from "./Question";
// function App() {
//   return (
//     <main>
//       <div className="container">
//         <h3>FAQ</h3>
//         <section className="info">
//           {data.map((question) => {
//             return (
//               <SingleQuestion
//                 title={question.title}
//                 key={question.id}
//                 info={question.info}
//               />
//             );
//           })}
//         </section>
//       </div>
//     </main>
//   );
// }


//App component for Quiz
//See QuizComp folder for more details
import React, { useState } from "react";

export default function App() {
  // Define a state variable here to track question status
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  function handleAnswerClick() {
    setCurrentIndex(currentIndex);
    // Check if the quiz is over here
    if (currentIndex === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentIndex((value) => value + 1);
    }
  }

  return (
    <div className="app">
      {quizFinished ? (
        <div className="score-section">
          You scored 1 out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
                <span>Question {currentIndex}</span>/{questions.length}
            </div>
            {/* You should change the "0" here to a state variable */}
            <div className="question-text">
              {questions[currentIndex].questionText}
            </div>
          </div>
          {/* You should change the "0" here to a state variable */}
          <div className="answer-section">
            {questions[currentIndex].answerOptions.map((answer) => {
              // Add onClick listener to this button
              return (
                <button onClick={handleAnswerClick} key={answer.answerText}>
                  {answer.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

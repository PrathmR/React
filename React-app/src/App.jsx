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

import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addItem(e) {
    e.preventDefault();
    if (task.trim() === "") {
      alert("Enter a task first");
      return;
    }
    setTodos([...todos, task]);
    setTask("");
  }

  function deleteItem(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <form
        onSubmit={addItem}
        className="text-white bg-gray h-screen flex flex-col items-center justify-center px-50 py-40"
      >
        <input className="bg-gray-600 px-15 py-5 font-semibold rounded border-1"
          type="text"
          placeholder="Write a todo..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

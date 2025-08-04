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

export default App;

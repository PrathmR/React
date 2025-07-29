import React from 'react';
import Cards from './Profile-Cards-Components/Cards'

const users = [
    {
      "profile-pic": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "name": "Aarav Sharma",
      "age": 28,
      "city": "Mumbai",
      "profession": "Software Engineer"
    },
    {
      "profile-pic": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "name": "Sanya Singh",
      "age": 34,
      "city": "Delhi",
      "profession": "Graphic Designer"
    },
    {
      "profile-pic": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "name": "Vikram Patel",
      "age": 45,
      "city": "Ahmedabad",
      "profession": "Architect"
    },
    {
      "profile-pic": "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "name": "Priya Reddy",
      "age": 29,
      "city": "Hyderabad",
      "profession": "Doctor"
    },
    {
      "profile-pic": "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "name": "Rohan Gupta",
      "age": 31,
      "city": "Bengaluru",
      "profession": "Marketing Manager"
    }
  ]
Main =() => {
    return (
        <div>
        <div className="p-10">
            {users.map((user, index) => {
             return  <Cards key={index} prof-pic={user.profile-pic} name ={user.name} age={user.age} prof = {user.profession} city = {user.city} />
            })}
        </div>
        </div>
    )
}

export default Main;
import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <div className="py-7 px-10 bg-white text-black flex-center justify-between">
      <h2 className="text-2xl">Prathmesh</h2>
      <input type="text" className='bg-black text-white'/>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}
export default Header;

import React from 'react';

const Navbar = () => {
    return (
        <div className=''>
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start ml-10">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><a className='border-b-3 border-b-amber-500 rounded-none hover:bg-amber-400 hover:text-white gap-2'>Order</a></li>
        <li><a  className='border-b-3 border-b-amber-500 rounded-none hover:bg-amber-400 hover:text-white'>Foods</a></li>
      <li><a  className='border-b-3 border-b-amber-500 rounded-none hover:bg-amber-400 hover:text-white'>Tables</a></li>
      <li><a  className='border-b-3 border-b-amber-500 rounded-none hover:bg-amber-400 hover:text-white'>Layout</a></li>
      </ul>
    </div>
        
  <img className='w-10' src="/logo.png" alt="" />
    <a className="text-xl">Taxi <span className='text-amber-500 font-bold'>Kitchen</span> </a>
  </div>

  <div className="navbar-end mr-10">
    {/* <a className="btn">Button</a> */}
      <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-8">
      <li><a className='border-b-3 border-b-black hover:border-b-amber-500 rounded-none hover:bg-amber-400 hover:text-black gap-2 duration-200 hover:font-bold'>Order</a></li>
        <li><a  className='border-b-3 border-b-amber-500 rounded-none hover:bg-amber-400 hover:text-black duration-200 hover:font-bold'>Foods</a></li>
      <li><a  className='border-b-3 border-b-amber-500 rounded-none hover:bg-amber-400 hover:text-black duration-200 hover:font-bold'>Tables</a></li>
      <li><a  className='border-b-3 border-b-amber-500 rounded-none hover:bg-amber-400 hover:text-black duration-200 hover:font-bold'>Layout</a></li>
      
    </ul>
  </div>
  </div>
</div>           
        </div>
    );
};

export default Navbar;
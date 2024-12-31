import { School } from 'lucide-react'
import React from 'react'

const Navbar = ()=> {
  const user =true;
  return (
    <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
     
     {/*Desktop */}
      <div className='max-w-7xl mx-auto hidden md:flex'>
      <School size={"30"}/>
      <h1 className="hidden md:block font-extrabold text-2xl">
       E-Learning
      </h1>
      </div>


    </div>
  );
};

export default Navbar;

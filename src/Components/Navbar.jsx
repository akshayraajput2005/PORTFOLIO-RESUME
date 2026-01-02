import React, { useState } from 'react'

const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  
  return ( 
    <nav className='bg-gray-950 flex justify-between text-white   px-6 py-4    ' > 
    <div className=' flex-1 items-center justify-between ' >
      
       
      <ul className=' gap-6 hidden md:flex text-sm '> 
        <li onClick={()=>{
          document
          .getElementById("Footer")
          .scrollIntoView({behavior:"smooth"})
        }} className='cursor-pointer hover:text-gray-300 '>Contact us </li>  
        <li className='cursor-pointer hover:text-gray-300 ' > Menu </li> 
        <li className='cursor-pointer hover:text-gray-300 ' >Upcoming</li>
      </ul>
<button className='md:hidden  ' onClick={()=>{setOpen(!open)

    }}
 > 
{open?"✕":"☰"}
</button>
{open&&(
  
 <ul className="md:hidden  text-sm">
          <li className='cursor-pointer' onClick={()=>{
            document
            .getElementById("Footer")
            .scrollIntoView({behavior:"smooth"})
          }} >Contact</li>
          <li className='cursor-pointer' >Menu</li>
          <li>Upcoming</li>
        </ul>
      )}
       

    </div>
    <h1 className=''>Akshay </h1>
     </nav>
  )
}

export default Navbar

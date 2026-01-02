import React from 'react'

const Heroes = () => {
  return (
    <div className='bg-slate-900 text-white px-6 py-14 '>
     <h1 className=' text-3xl md:text-5xl font-bold'>Akshay</h1>
     <h3 className='mt-4 text-2xl md:text-3xl' >Front-End Developer </h3>
      <p className='md:text-2xl'>Focused on performance, accessibility, and modern UI </p> 
      <button onClick={()=>{
       document
       .getElementById("projects")
       .scrollIntoView({behavior:"smooth"})
      }} className='bg-white text-black py-2 px-6 rounded-4xl font-medium '>View Projects</button> <button  className='border ml-8 border-white rounded px-6 py-2 hover:bg-white hover:text-black  ' onClick={()=>{
        document
        .getElementById("Footer")
        .scrollIntoView({behavior:"smooth"})
      }} >Contact Me</button>
      
    </div>
  )
}

export default Heroes

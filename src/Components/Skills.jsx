import React from 'react'

const Skills = () => {
  return (
  <section className='py-6 px-20 bg-gray-100 text-black ' >
    <h2 className='text-3xl font-bold text-center mb-8'>Skills</h2>
    <div className='grid md:grid-cols-3 gap-8  max-w-5xl mx-auto'>
{/* frontend */}
      <div> 
        <h3 className='font-semibold mb-3'>Frontend </h3>
        <ul className='text-y-1 text-sm text-gray-700'> 
          <li>HTML5 </li>
          <li>CSS3</li>
          <li>Tailwind CSS </li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>

      {/* Tools */}

<div> 
  <h3 className='font-semibold mb-3  '> Tools</h3>
  <ul className='space-y-1 text-sm text-gray-700'>
     <li>Git & GitHub</li>
     <li>Vite</li>
     <li>Responsive Design</li>
     <li>Basic SEO</li>
     <li>Performance Optimization</li>
  </ul>
</div>
   <div>
          <h3 className="font-semibold mb-3">Familiar With</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>REST APIs</li>
            <li>Node.js </li>
            <li>Express </li>
            <li>Learning DevOps</li>
        </ul>
      </div>
     </div>   
  </section>
  )
}

export default Skills

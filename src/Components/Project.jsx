import React from 'react'

const Project = () => {
  return (
   <section className='bg-white text-black px-6 py-16 mb-12 ' id='projects'>

      <h2 className='text-black font-bold text-center ' > Projects</h2>
      <div className='grid
      md:grid-cols-3 gap-6 max-w-6xl mx-auto'> 
        {/* Project 1 */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            Startup Landing Page
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            A fast, responsive landing page built with performance
            and clean UI in mind.
          </p>
          <p className="text-xs text-gray-500 mb-4">
            HTML • Tailwind CSS • JavaScript
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm font-medium underline"
            >
              Live
            </a>
            <a
              href="#"
              className="text-sm font-medium underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            Blog Website UI
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Blog listing and detail pages with a clean,
            responsive layout.
          </p>
          <p className="text-xs text-gray-500 mb-4">
            React • Tailwind CSS • Vite
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm font-medium underline">
              Live
            </a>
            <a href="#" className="text-sm font-medium underline">
              GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            Dashboard UI
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Admin dashboard layout with cards, tables,
            and responsive design.
          </p>
          <p className="text-xs text-gray-500 mb-4">
            React • Tailwind CSS
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm font-medium underline">
              Live
            </a>
            <a href="#" className="text-sm font-medium underline">
              GitHub
            </a>
          </div>
        </div>


      </div>
   
   </section>
  )
}

export default Project

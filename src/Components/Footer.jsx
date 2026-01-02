
import { Github, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return (
<footer id='Footer' className='bg-slate-950 text-gray-300 px-6 py-8 '>
  <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4' >
    <p className='text-sm'> © {new Date().getFullYear()} Akshay. All rights reserved  </p>
    <p>akshayraajput2005@gmail.com</p>
    <div className='flex gap-4 text-sm'>
      <a className='hover:text-white' href="akshayraajput2005@gmail.com">Gmail</a>
      <a href="www.linkedin.com/in/
akshay-singh-842448397
"><Linkedin/></a>
<a href="https://x.com/pixels_loopcode"><Twitter/></a>
<a href="#github"><Github/></a>

    </div>

  </div>

</footer>
  )
}

export default Footer

import React from 'react'
import mostafa from '../images/MOSTAFA-curcle.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Banner = () => {
   return (
      <div className='container mx-auto h-[90vh] w-full flex items-center justify-center sm:gap-16 gap-8 sm:flex-row flex-col'>
         <img src={mostafa} alt="" className='w-96' />
         <div className="content text-center text-2xl">
            <span className="font-semibold text-neutral-600">Hello , I'm</span>
            <h1 className="font-bold text-4xl my-4">Mostafa ElSayed</h1>
            <h2 className="font-semibold text-3xl text-neutral-700">FrontEnd Developer</h2>
            <div className="btns my-5 flex gap-4">
               <button className="border-2 border-black px-4 py-1 rounded-full cursor-pointer duration-300">Download CV</button>
               <button className="border-2 border-black px-4 py-1 rounded-full cursor-pointer duration-300 text-white bg-black">Contact Info</button>
            </div>
            <div className="icons flex justify-center gap-4">
               <Link to={`https://www.linkedin.com/in/mostafa-el-sayed-6703a5286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`} target='_blank'><FaLinkedin className='rounded-full text-3xl cursor-pointer' /></Link>
               <Link to={`https://github.com/MostafaGoda123`} target='_blank'><FaGithub  className='cursor-pointer text-3xl' /></Link>
            </div>
         </div>
      </div>
   )
}

export default Banner

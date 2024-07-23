import React, { useContext, useState } from 'react'
import logo from "../images/Logo0.png"
import { Link } from 'react-router-dom'
import { MobileHandlerContext } from '../context/MobileHandler'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { motion } from 'framer-motion'

const Navbar = () => {
   let {isMobile} = useContext(MobileHandlerContext);
   const [openMenu, setOpenMenu] = useState(false);

   return (
      <nav className='container mx-auto h-[10vh] flex justify-between items-center'>
         <img src={logo} alt="" className="logo h-12" />
         {isMobile ?
            <div className="relative">
               {openMenu ? <IoMdClose onClick={()=>setOpenMenu(false)} className='text-4xl text-red-700 cursor-pointer' /> : <FaBars onClick={()=>setOpenMenu(true)} className='text-4xl cursor-pointer' />}
               {openMenu && 
               <motion.ul className='flex flex-col gap-5 text-2xl font-semibold absolute top-10 right-0 bg-neutral-100 text-center p-10 rounded-lg overflow-hidden'
               initial={{x:100}}
               whileInView={{x:0}}
               transition={{duration:0.4}}>
                  <li onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-500 duration-300' to="about">About</Link></li>
                  <li onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-500 duration-300' to="experience">Experience</Link></li>
                  <li onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-500 duration-300' to="projects">Projects</Link></li>
                  <li onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-500 duration-300' to="contact">Contact</Link></li>
               </motion.ul>}
            </div>
         :
            <ul className='flex gap-4 text-2xl font-semibold'>
               <li><Link className='hover:text-neutral-500 duration-300' to="/about">About</Link></li>
               <li><Link className='hover:text-neutral-500 duration-300' to="/experience">Experience</Link></li>
               <li><Link className='hover:text-neutral-500 duration-300' to="/projects">Projects</Link></li>
               <li><Link className='hover:text-neutral-500 duration-300' to="/contact">Contact</Link></li>
            </ul>}
      </nav>
   )
}

export default Navbar

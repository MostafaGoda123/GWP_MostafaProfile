import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({project}) => {
   console.log(project);
   return (
      <motion.div className='rounded-xl border-2 border-neutral-400 shadow-xl p-2 flex flex-col gap-4 items-center justify-center'
      initial={{y:100}}
      whileInView={{y:0}}
      transition={{duration:0.4}}>
         <img src={project.image} alt="..." className="w-full h-60 rounded-xl" />
         <h1 className="font-bold text-2xl">{project.name}</h1>
         <p className="text-2xl text-neutral-600">(<span className='font-semibold mx-1'>{project.category}</span>) project</p>
         <div className="links flex justify-between w-full px-5 pb-3">
            <Link className='px-3 py-1 border border-black rounded-full font-semibold duration-300 hover:bg-black hover:text-white' target='_blank' to={project.githubLink}>Github</Link>
            <Link className='px-3 py-1 border border-black rounded-full font-semibold duration-300 hover:bg-black hover:text-white' target='_blank' to={project.websiteLink}>Live Demo</Link>
         </div>
      </motion.div>
   )
}

export default Card

import React, { useState } from 'react'
import { allProjects } from './../data/AllProjects';
import Card from './Card';

const Projects = () => {
   const [projects, setProjects] = useState(allProjects);

   let editProjects = (edit) => {
      setProjects(
         allProjects.filter(project => {
            return project.category === edit
         })
      )
   }

   return (
      <section id='projects' className='py-20 bg-neutral-100'>
      <section className='container mx-auto'>
         <div className="tit flex items-center flex-col gap-1 mb-16">
            <p className='text-xl text-neutral-700'>Browse My Recent</p>
            <h1 className="text-4xl font-bold">Projects</h1>
         </div>
         <ul className='flex sm:gap-5 gap-1 items-center justify-center mb-16'>
            <li><button onClick={()=>setProjects(allProjects)} className='border-2 border-black px-4 py-1 rounded-full text-2xl duration-300 hover:bg-black hover:text-white '>All</button></li>
            <li><button onClick={()=>editProjects("html&css")} className='border-2 border-black px-4 py-1 rounded-full text-2xl duration-300 hover:bg-black hover:text-white '>Html & CSS</button></li>
            <li><button onClick={()=>editProjects("javascript")} className='border-2 border-black px-4 py-1 rounded-full text-2xl duration-300 hover:bg-black hover:text-white '>JavaScript</button></li>
            <li><button onClick={()=>editProjects("react")} className='border-2 border-black px-4 py-1 rounded-full text-2xl duration-300 hover:bg-black hover:text-white '>React</button></li>
         </ul>
         <article className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
               projects.map(project => (
                  <Card key={project.name} project={project} />
               ))
            }
         </article>
      </section>
      </section>
   )
}

export default Projects

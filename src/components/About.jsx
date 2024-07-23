import React from 'react'
import edu from '../images/education.png'
import exp from '../images/experience.png'
import mostafa from '../images/Mostafa-=-.png'

const About = () => {
   return (
      <section id='about' className='container mx-auto py-20'>
         <div className="tit flex items-center flex-col gap-1 mb-16">
            <p className='text-xl text-neutral-700'>Get To Know More</p>
            <h1 className="text-4xl font-bold">About Me</h1>
         </div>
         <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 items-center justify-center">
            <img src={mostafa} alt="" className='rounded-xl sm:w-96 w-60' />
            <div className="content flex flex-col gap-5">
               <div className="flex sm:flex-row flex-col gap-5">
                  <p className='flex flex-1 flex-col rounded-xl p-5 border-2 border-neutral-400 justify-center items-center gap-1 text-xl text-neutral-600 font-semibold'>
                     <img src={exp} alt="" className='w-8'/>
                     <span className='font-bold text-2xl text-black'>Experience</span>
                     <span>1+ years</span>
                     <span>Frontend Development</span>
                  </p>
                  <p className='flex flex-1 flex-col rounded-xl p-5 border-2 border-neutral-400 justify-center items-center gap-1 text-xl text-neutral-600 font-semibold'>
                     <img src={edu} alt="" className='w-8'/>
                     <span className='font-bold text-2xl text-black'>Education</span>
                     <span>Faculty of Engineering</span>
                     <span>at Mansoura University</span>
                  </p>
               </div>
               <p className='text-neutral-600 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!</p>
            </div>
         </div>
      </section>
   )
}

export default About

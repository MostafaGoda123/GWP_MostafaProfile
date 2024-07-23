import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

const Experience = () => {
   return (
      <section className='container mx-auto py-20'>
         <div className="tit flex items-center flex-col gap-1 mb-16">
            <p className='text-xl text-neutral-700'>Explore My</p>
            <h1 className="text-4xl font-bold">Experience</h1>
         </div>
         <div className="flex sm:flex-row flex-col gap-5">
                     <div className='grid items-start sm:grid-cols-2 grid-cols-1 gap-5 flex-1 rounded-xl p-10 border-2 border-neutral-400  text-xl font-semibold'>
                     <h1 className="col-span-2 text-center text-neutral-600 text-4xl pb-5">FrontEnd Languages</h1>
                     <p className='flex gap-3 items-center'>
                        <RiVerifiedBadgeFill className='text-3xl'/>
                        <span><p className='font-bold'>Html</p><p className="text-neutral-600">Experienced</p></span>
                     </p>
                     <p className='flex gap-3 items-center'>
                        <RiVerifiedBadgeFill className='text-3xl'/>
                        <span><p className='font-bold'>CSS</p><p className="text-neutral-600">Experienced</p></span>
                     </p>
                     <p className='flex gap-3 items-center'>
                        <RiVerifiedBadgeFill className='text-3xl'/>
                        <span><p className='font-bold'>JavaScript</p><p className="text-neutral-600">Experienced</p></span>
                     </p>
                     <p className='flex gap-3 items-center'>
                        <RiVerifiedBadgeFill className='text-3xl'/>
                        <span><p className='font-bold'>React</p><p className="text-neutral-600">Experienced</p></span>
                     </p>
                  </div>
                  <div className='grid items-start sm:grid-cols-2 grid-cols-1 gap-5 flex-1 rounded-xl p-10 border-2 border-neutral-400 text-xl font-semibold'>
                     <h1 className="col-span-2 text-center text-neutral-600 text-4xl pb-5">FrontEnd Frameworks</h1>
                     <p className='flex gap-3 items-center'>
                        <RiVerifiedBadgeFill className='text-3xl'/>
                        <span><p className='font-bold'>Bootstrap</p><p className="text-neutral-600">Experienced</p></span>
                     </p>
                     <p className='flex gap-3 items-center'>
                        <RiVerifiedBadgeFill className='text-3xl'/>
                        <span><p className='font-bold'>Tailwind CSS</p><p className="text-neutral-600">Experienced</p></span>
                     </p>
                     <p className='flex gap-3 items-center'>
                        <RiVerifiedBadgeFill className='text-3xl'/>
                        <span><p className='font-bold'>Material Ui</p><p className="text-neutral-600">Intermediate</p></span>
                     </p>
                     <p className='flex gap-3 items-center'>
                        <RiVerifiedBadgeFill className='text-3xl'/>
                        <span><p className='font-bold'>Formik</p><p className="text-neutral-600">Intermediate</p></span>
                     </p>
                     <p className='flex gap-3 items-center'>
                        <RiVerifiedBadgeFill className='text-3xl'/>
                        <span><p className='font-bold'>Github</p><p className="text-neutral-600">Intermediate</p></span>
                     </p>
                  </div>
               </div>
      </section>
   )
}

export default Experience

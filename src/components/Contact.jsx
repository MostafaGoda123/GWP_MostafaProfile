import React from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
   return (
      <section id='contact' className='container mx-auto my-20'>
         <div className="tit flex items-center flex-col gap-1 mb-16">
            <p className='text-xl text-neutral-700'>Get in Touch</p>
            <h1 className="text-4xl font-bold">Contact Me</h1>
         </div>
         <div className="border-2 border-neutral-400 p-5 rounded-xl flex flex-col gap-5 w-fit mx-auto">
            <Link to={'www.email.mostafagoda390@gmail.com'} target='_blank' className='flex items-center gap-2 text-2xl hover:text-neutral-600'><FaEnvelope  />mostafagoda390@gmail.com</Link>
            <Link to={'https://www.linkedin.com/in/mostafa-el-sayed-6703a5286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target='_blank' className='flex items-center gap-2 text-2xl hover:text-neutral-600'><FaLinkedin />LinkedIn</Link>
         </div>
      </section>
   )
}

export default Contact

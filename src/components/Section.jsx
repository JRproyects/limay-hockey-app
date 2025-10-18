import React from 'react'

export default function Section({ title, id, children, effect }) {
  return (
    <section id={id} className={`relative p-8 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md ${effect}`}>
      <h2 className='text-2xl font-bold mb-4 text-center'>{title}</h2>
      <div className='relative z-10 text-gray-800'>
        {children}
      </div>
    </section>
  )
}

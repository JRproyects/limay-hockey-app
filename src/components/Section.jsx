import React from 'react'

export default function Section({title, children, id}){
  return (
    <section id={id} className='bg-white/70 rounded-xl p-6 shadow-md'>
      <h3 className='text-2xl font-semibold mb-3'>{title}</h3>
      <div>{children}</div>
    </section>
  )
}

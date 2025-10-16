import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-white/60 backdrop-blur-sm sticky top-0 z-40 border-b border-white/20'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
         <div className='w-12 h-12'>
  <img
    src='Public/fotos/logo.jpg' // Cambia esto por la ruta de tu imagen
    alt='Logo Club Limay'
    className='w-full h-full object-cover rounded-full'
  />
</div>

          <div>
            <h1 className='text-xl font-semibold'>Club Limay</h1>
            <p className='text-sm -mt-1'>Hockey Subacuático</p>
          </div>
        </div>

        <div className='hidden md:flex items-center gap-6'>
          <a href='#que-es' className='hover:underline'>Qué es</a>
          <a href='#historia' className='hover:underline'>Historia</a>
          <a href='#entrenamientos' className='hover:underline'>Entrenamientos</a>
          <a href='#equipos' className='hover:underline'>Equipos</a>
          <a href='#sumarse' className='hover:underline'>Sumate</a>
        </div>
      </div>
    </nav>
  )
}

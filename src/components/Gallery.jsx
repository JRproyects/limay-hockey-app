import React from 'react'

export default function Gallery() {
  // Podés reemplazar estos nombres por tus propias imágenes
const images = [
  './fotos/f-1.jpg',
  './fotos/f-2.webp',
  './fotos/f-3.webp',
  './fotos/f-4.webp',
  './fotos/f-5.webp',
  './fotos/f-6.jpg'
];


  return (
    <section className='bg-white/70 rounded-xl p-6 shadow-md'>
      <h3 className='text-2xl font-semibold mb-3'>Galería</h3>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {images.map((src, i) => (
          <div
            key={i}
            className='h-36 md:h-48 rounded-md overflow-hidden shadow-inner group relative'
          >
            <img
              src={src}
              alt={`Foto ${i + 1}`}
              className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300'
            />
            {/* Overlay opcional al pasar el mouse */}
            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity'></div>
          </div>
        ))}
      </div>
    </section>
  )
}

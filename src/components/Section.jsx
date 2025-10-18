import React from 'react'

export default function Section({ title, id, children, effect }) {
  return (
    <section id={id} className="relative p-8 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md">
      {/* Efecto decorativo detrás */}
      <div className={`absolute inset-0 ${effect}`} />

      {/* Contenido */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-deepBlue">{title}</h2>
        <div className="text-gray-800">
          {children}
        </div>
      </div>
    </section>
  )
}

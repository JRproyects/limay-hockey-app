import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className='relative overflow-hidden'>
      <div className='container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-8'>
        
        {/* Lado izquierdo: texto y botón */}
        <div className='flex-1'>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='text-4xl md:text-5xl font-extrabold'
          >
            Limay
            <span className='text-aqua ml-2'>Hockey Subacuático</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='mt-4 text-lg max-w-xl'
          >
            Vení a probar un deporte único: velocidad, estrategia y trabajo en equipo bajo el agua.
          </motion.p>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className='mt-6'
          >
            <a href='#sumarse' className='btn-primary'>Quiero probar</a>
          </motion.div>
        </div>

        {/* Lado derecho: video */}
        <div className='flex-1'>
          <div className='w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner'>
            <video
              src='/limay-hockey-app/videos/video-1.mp4'
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      {/* 🌊 Olas animadas */}
      <motion.svg
        className='absolute bottom-0 left-0 w-full'
        viewBox='0 0 1440 100'
        xmlns='http://www.w3.org/2000/svg'
        animate={{ x: [0, -80, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      >
        <path
          d='M0,40 C300,120 900,0 1440,40 L1440 100 L0 100 Z'
          fill='#00bfff'
          opacity='0.12'
        />
      </motion.svg>

      {/* 🫧 Burbujas en el hero */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute bg-white rounded-full opacity-20'
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
            }}
            animate={{
              y: ['0%', '-120vh'],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.2, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  )
}

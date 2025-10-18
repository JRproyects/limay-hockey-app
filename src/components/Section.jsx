import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ title, children, id, effect }) {
  return (
    <motion.section
      id={id}
      className="relative p-8 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md"
      initial={{ y: 0 }}
      animate={effect === 'wave' ? { y: [0, -5, 0] } : {}}
      transition={effect === 'wave' ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : {}}
    >
      {/* Animaciones decorativas */}
      {effect === 'wave' && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ y: [0, 5, 0] }} // ola sube y baja suavemente
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-full h-full" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,40 C300,120 900,0 1440,40 L1440 100 L0 100 Z"
              fill="#00bfff"
              opacity="0.12"
            />
          </svg>
        </motion.div>
      )}

      {effect === 'bubbles' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => {
            const size = Math.random() * 12 + 6
            const left = Math.random() * 100
            const duration = Math.random() * 8 + 6
            const delay = Math.random() * 3
            const xMovement = Math.random() * 20 - 10
            const opacity = Math.random() * 0.3 + 0.2

            return (
              <motion.div
                key={i}
                className="absolute bg-blue-200 rounded-full"
                style={{
                  width: size,
                  height: size,
                  left: `${left}%`,
                  bottom: '-10px',
                  opacity: opacity,
                }}
                animate={{
                  y: ['0%', '-120%', '-100%'],
                  x: [0, xMovement, 0],
                  opacity: [opacity, opacity + 0.2, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </div>
      )}

      {/* Contenido */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-deepBlue text-center">{title}</h2>
        <div className="text-gray-800">{children}</div>
      </div>
    </motion.section>
  )
}

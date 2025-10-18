import React from 'react'
import { motion } from 'framer-motion'

export default function InfoCard({ title, text }) {
  return (
    <motion.div
      className="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: [0, -5, 0] }} // movimiento de ola suave
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Título y texto */}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700">{text}</p>

      {/* Burbujas decorativas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 8 + 4
          const left = Math.random() * 100
          const duration = Math.random() * 6 + 4
          const delay = Math.random() * 3
          const xMovement = Math.random() * 20 - 10
          return (
            <motion.div
              key={i}
              className="absolute bg-blue-200 rounded-full opacity-30"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: '-10px',
              }}
              animate={{
                y: ['0%', '-120%', '-100%'],
                x: [0, xMovement, 0],
                opacity: [0.2, 0.5, 0],
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
    </motion.div>
  )
}

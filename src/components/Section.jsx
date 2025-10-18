import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ title, children, id, effect }) {
    // Definimos una constante para los efectos combinados
    const isUnderwaterEffect = effect === 'underwater';

    return (
        <section
            id={id}
            // Agregamos una clase que encapsule ambos efectos para el estilo CSS
            className={`relative p-8 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md ${isUnderwaterEffect ? 'underwater-effect' : ''}`}
        >
            
            {/*  EFECTO DE OLA (Original) - Se muestra si effect es 'wave' O 'underwater' */}
            {(effect === 'wave' || isUnderwaterEffect) && (
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none"
                    animate={{ y: [0, 5, 0] }} // ola sube y baja suavemente
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <svg className="w-full h-full" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
                        <path
                            // Aumentamos ligeramente la opacidad y hacemos la ola un poco más visible
                            d="M0,40 C300,120 900,0 1440,40 L1440 100 L0 100 Z"
                            fill="#00bfff"
                            opacity="0.2" // Opacidad aumentada
                        />
                    </svg>
                </motion.div>
            )}

            {/* 🫧 EFECTO DE BURBUJAS (Original) - Se muestra si effect es 'bubbles' O 'underwater' */}
            {(effect === 'bubbles' || isUnderwaterEffect) && (
                <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => { // Aumenté el número de burbujas a 12
                        const size = Math.random() * 10 + 5 // Burbujas un poco más pequeñas
                        const left = Math.random() * 100
                        const duration = Math.random() * 10 + 6
                        const delay = Math.random() * 5
                        const xMovement = Math.random() * 20 - 10
                        const opacity = Math.random() * 0.4 + 0.1 // Opacidad ajustada

                        return (
                            <motion.div
                                key={i}
                                className="absolute bg-blue-100/70 rounded-full"
                                style={{
                                    width: size,
                                    height: size,
                                    left: `${left}%`,
                                    bottom: '-10px',
                                    opacity: opacity,
                                    boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' // Agregamos un pequeño brillo
                                }}
                                animate={{
                                    y: ['0%', '-150%'], // Las hacemos subir un poco más
                                    x: [0, xMovement, 0],
                                    opacity: [opacity, opacity + 0.2, 0],
                                }}
                                transition={{
                                    duration: duration,
                                    repeat: Infinity,
                                    delay: delay,
                                    ease: 'linear', // Cambio a 'linear' para un movimiento de burbuja más natural
                                }}
                            />
                        )
                    })}
                </div>
            )}

            {/* Contenido siempre estable */}
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 text-deepBlue text-center">{title}</h2>
                <div className="text-gray-800">{children}</div>
            </div>
        </section>
    )
}
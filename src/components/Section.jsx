import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ title, children, id, effect }) {
    const isUnderwaterEffect = effect === 'underwater';

    return (
        <section
            id={id}
            className={`relative p-8 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md ${isUnderwaterEffect ? 'underwater-effect' : ''}`}
        >
            
            {/* 🌊 EFECTO DE OLA (sin cambios) */}
            {(effect === 'wave' || isUnderwaterEffect) && (
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-full pointer-events-none" 
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <svg 
                        className="w-full h-full absolute bottom-0" 
                        viewBox="0 0 1440 100" 
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none" 
                    >
                        <path
                            d="M0,40 C300,120 900,0 1440,40 L1440 100 L0 100 Z"
                            fill="#00bfff"
                            opacity="0.2"
                        />
                    </svg>
                </motion.div>
            )}

            {/* 🫧 EFECTO DE BURBUJAS MODIFICADO */}
            {(effect === 'bubbles' || isUnderwaterEffect) && (
                <div 
                    className="absolute bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden"
                >
                    {[...Array(12)].map((_, i) => {
                        // AJUSTE CLAVE 1: Mayor rango de tamaño para burbujas más grandes
                        const size = Math.random() * 20 + 10 // Tamaño: 10px a 30px
                        const left = Math.random() * 100
                        const duration = Math.random() * 10 + 6
                        const delay = Math.random() * 5
                        const xMovement = Math.random() * 20 - 10
                        // AJUSTE CLAVE 2: Mayor rango de opacidad para más visibilidad
                        const opacity = Math.random() * 0.6 + 0.3 // Opacidad: 30% a 90%

                        return (
                            <motion.div
                                key={i}
                                // AJUSTE CLAVE 3: Color blanco/casi blanco para destacar
                                className="absolute bg-white/90 rounded-full"
                                style={{
                                    width: size,
                                    height: size,
                                    left: `${left}%`,
                                    bottom: '-10px',
                                    opacity: opacity,
                                    // AJUSTE CLAVE 4: Mayor brillo para el efecto "subacuático"
                                    boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), inset 0 0 4px rgba(0, 0, 0, 0.2)' 
                                }}
                                animate={{
                                    y: ['0%', '-120%'], 
                                    x: [0, xMovement, 0],
                                    // Aseguramos que se desvanezca al final
                                    opacity: [opacity, opacity + 0.1, 0],
                                }}
                                transition={{
                                    duration: duration,
                                    repeat: Infinity,
                                    delay: delay,
                                    ease: 'linear',
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
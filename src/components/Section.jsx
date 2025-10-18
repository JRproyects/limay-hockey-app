import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ title, children, id, effect }) {
    // Definimos una constante para los efectos combinados
    const isUnderwaterEffect = effect === 'underwater';

    return (
        <section
            id={id}
            // Mantenemos las clases base
            className={`relative p-8 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md ${isUnderwaterEffect ? 'underwater-effect' : ''}`}
        >
            
            {/* 🌊 EFECTO DE OLA MODIFICADO: ahora ocupa H-FULL (Altura Completa) */}
            {(effect === 'wave' || isUnderwaterEffect) && (
                <motion.div
                    // CAMBIO CLAVE 1: Usamos h-full en lugar de h-1/2
                    className="absolute bottom-0 left-0 w-full h-full pointer-events-none" 
                    // Ajustamos la animación para que la ola parezca moverse a través del fondo
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <svg 
                        // CAMBIO CLAVE 2: Estiramos el SVG a h-full
                        className="w-full h-full absolute bottom-0" 
                        viewBox="0 0 1440 100" 
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none" // Para que se adapte mejor al estiramiento
                    >
                        <path
                            // Usamos el mismo path de ola, pero el contenedor h-full lo estira.
                            d="M0,40 C300,120 900,0 1440,40 L1440 100 L0 100 Z"
                            fill="#00bfff"
                            opacity="0.2"
                        />
                    </svg>
                </motion.div>
            )}

            {/* 🫧 EFECTO DE BURBUJAS: Ya estaba en H-FULL, pero lo revisamos */}
            {(effect === 'bubbles' || isUnderwaterEffect) && (
                <div 
                    // Aseguramos que las burbujas usen h-full para subir desde abajo hasta arriba
                    className="absolute bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden"
                >
                    {[...Array(12)].map((_, i) => {
                        const size = Math.random() * 10 + 5
                        const left = Math.random() * 100
                        const duration = Math.random() * 10 + 6
                        const delay = Math.random() * 5
                        const xMovement = Math.random() * 20 - 10
                        const opacity = Math.random() * 0.4 + 0.1 

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
                                    boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
                                }}
                                animate={{
                                    // Ajustamos la distancia de subida a -120% para asegurar que desaparecen completamente
                                    y: ['0%', '-120%'], 
                                    x: [0, xMovement, 0],
                                    opacity: [opacity, opacity + 0.2, 0],
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

            {/* Contenido siempre estable (sin cambios) */}
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 text-deepBlue text-center">{title}</h2>
                <div className="text-gray-800">{children}</div>
            </div>
        </section>
    )
}
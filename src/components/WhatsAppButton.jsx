import React from 'react'
import { MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

// phone should be in international format without +, e.g. '5491122233344'
export default function WhatsAppButton({phone='1135801010', message='Hola!%20Quisiera%20informaci%C3%B3n%20sobre%20Limay%20Hockey%20Subacu%C3%A1tico.'}){
  const href = `https://wa.me/${phone}?text=${message}`
  return (
    <motion.a
      initial={{scale:0, opacity:0}}
      animate={{scale:1, opacity:1}}
      transition={{delay:0.6, type:'spring', stiffness:120}}
      href={href}
      target='_blank'
      rel='noreferrer'
      className='fixed right-4 bottom-6 z-50 flex items-center gap-3 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-all'
      title='Comunicarse por WPP'
    >
      <MessageSquare size={20} />
      <span className='hidden sm:inline'>Comunicarse por WPP</span>
    </motion.a>
  )
}

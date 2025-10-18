import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import content from './content'

export default function App() {
  const sections = [
    { title: '¿Qué es el Hockey Subacuático?', id: 'que-es', content: <p className='text-lg leading-relaxed'>{content.whatIs}</p> },
    { title: 'Historia del Club', id: 'historia', content: <p className='text-lg leading-relaxed'>{content.history}</p> },
    { title: 'Entrenamientos y horarios', id: 'entrenamientos', content: (
        <ul className='list-disc ml-6 mt-4 space-y-2'>
          {content.schedule.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      )},
    { title: 'Equipos y categorías', id: 'equipos', content: <p className='text-lg leading-relaxed'>{content.teams}</p> },
    { title: 'Cómo sumarse', id: 'sumarse', content: <p className='text-lg leading-relaxed'>{content.howToJoin}</p> },
  ]

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-1'>
        <Hero />
        <div className='container mx-auto px-4 space-y-12 py-12'>
          {sections.map((s, i) => (
            <Section 
              key={i}
              title={s.title}
              id={s.id}
              effect={i % 2 === 0 ? 'wave' : 'bubbles'} // 1,3,5 → wave / 2,4 → bubbles
            >
              {s.content}
            </Section>
          ))}
          <Gallery />
        </div>
      </main>
      <Footer />
      <WhatsAppButton phone='+5491135801010' message='Hola!%20Quisiera%20informaci%C3%B3n%20sobre%20Limay%20Hockey%20Subacu%C3%A1tico.%20' />
    </div>
  )
}

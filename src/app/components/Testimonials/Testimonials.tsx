'use client'

import { useState, useEffect } from 'react'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'María González',
      age: 34,
      text: 'Emaús cambió mi vida completamente. Encontré una comunidad que me abraza y una fe renovada que me acompaña cada día.',
      location: 'Buenos Aires'
    },
    {
      name: 'Carlos Rodríguez',
      age: 28,
      text: 'Nunca pensé que tres días pudieran marcar tanto. La experiencia de Emaús me ayudó a encontrar mi propósito y mi lugar en el mundo.',
      location: 'Córdoba'
    },
    {
      name: 'Ana Martínez',
      age: 42,
      text: 'Después de años de búsqueda, en Emaús encontré las respuestas que necesitaba. Una experiencia profundamente transformadora.',
      location: 'Rosario'
    },
    {
      name: 'Diego López',
      age: 31,
      text: 'La comunidad de Emaús se convirtió en mi segunda familia. Aquí aprendí el verdadero significado del amor fraterno.',
      location: 'Mendoza'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section id="testimonials" className={`${styles.testimonials} section-padding`}>
      <div className="container">
        <h2 className={styles.title}>Testimonios que inspiran</h2>
        <p className={styles.subtitle}>
          Conocé las experiencias de quienes ya vivieron Emaús
        </p>
        
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialCard}>
            <div className={styles.quote}>&ldquo;</div>
            <p className={styles.testimonialText}>
              {testimonials[currentTestimonial].text}
            </p>
            <div className={styles.testimonialAuthor}>
              <h4 className={styles.authorName}>
                {testimonials[currentTestimonial].name}
              </h4>
              <p className={styles.authorInfo}>
                {testimonials[currentTestimonial].age} años • {testimonials[currentTestimonial].location}
              </p>
            </div>
          </div>
          
          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentTestimonial ? styles.active : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

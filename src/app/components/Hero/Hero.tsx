'use client'

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>Emaús</h1>
        </div>
        
        <div className={`${styles.heroText} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.title}>
            Un camino de fe, comunidad y renovación
          </h2>
          
          <p className={styles.subtitle}>
            Sumate a Emaús y descubrí una experiencia espiritual transformadora
          </p>
          
          <button 
            className={styles.ctaButton}
            onClick={scrollToForm}
          >
            Inscribirme ahora
          </button>
        </div>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>
    </section>
  )
}

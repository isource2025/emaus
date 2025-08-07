'use client'

import { useState } from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Image 
              src="/emaus-logo.png" 
              alt="Logo Emaús" 
              width={40} 
              height={40} 
              className={styles.logoImage}
            />
            <h2 className={styles.logoText}>Emaús</h2>
          </div>
          
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <Link 
              href="/" 
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <a 
              href="#about" 
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              Nosotros
            </a>
            <a 
              href="#testimonials" 
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('testimonials')
              }}
            >
              Testimonios
            </a>
            <a 
              href="/emaus-hombres" 
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Emaús Hombres
            </a>
            <a 
              href="/emaus-mujeres" 
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Emaús Mujeres
            </a>
            <a 
              href="#contact-form" 
              className={`${styles.navLink} ${styles.ctaLink}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact-form')
              }}
            >
              Inscribirme
            </a>
          </nav>
          
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          </div>
        </div>
      </header>
    </>
  )
}

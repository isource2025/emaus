import styles from './ContactForm.module.css'

export default function ContactForm() {

  return (
    <section id="contact-form" className={`${styles.contactForm} section-padding`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.ctaSection}>
            <h2 className={styles.title}>Quiero ser parte de Emaús</h2>
            <p className={styles.description}>
              ¿Estás listo para vivir una experiencia espiritual transformadora? 
              Únete a nuestra comunidad y descubre un camino de fe, renovación y hermandad.
            </p>
            <p className={styles.subdescription}>
              Completa nuestro formulario de inscripción y nos pondremos en contacto 
              contigo para brindarte toda la información sobre las próximas fechas.
            </p>
            
            <a 
              href="/inscripciones" 
              className={styles.ctaButton}
            >
              Inscribirme ahora
            </a>
            
            <p className={styles.note}>
              📝 Serás redirigido a la página de inscripción
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <h3 className={styles.logo}>Emaús</h3>
            <p className={styles.tagline}>
              &ldquo;Caminando juntos hacia la luz&rdquo;
            </p>
          </div>
          
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Contacto</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <span>info@emaus.org.ar</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📱</span>
              <span>+54 9 351 123-4567</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>Córdoba, Argentina</span>
            </div>
          </div>
          
          <div className={styles.socialSection}>
            <h4 className={styles.sectionTitle}>Síguenos</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <span>📹</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="WhatsApp">
                <span>💬</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; 2024 Comunidad Religiosa Emaús. Todos los derechos reservados.</p>
          </div>
          <div className={styles.inspiration}>
            <p>&ldquo;Permanezcan en mi amor&rdquo; - Juan 15:9</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

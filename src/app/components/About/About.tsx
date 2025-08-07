import styles from './About.module.css'

export default function About() {
  const features = [
    {
      icon: '🙏',
      title: 'Experiencia Espiritual',
      description: 'Momentos de oración, reflexión y encuentro personal con lo sagrado'
    },
    {
      icon: '👥',
      title: 'Comunidad',
      description: 'Comparte con personas que buscan crecer en la fe y el amor fraterno'
    },
    {
      icon: '🌟',
      title: 'Transformación',
      description: 'Un camino de renovación interior que marca un antes y un después'
    },
    {
      icon: '🤝',
      title: 'Acompañamiento',
      description: 'Guías espirituales experimentados te acompañan en cada paso del camino'
    }
  ]

  return (
    <section id="about" className={`${styles.about} section-padding`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>¿Qué es Emaús?</h2>
            <p className={styles.description}>
              Emaús es más que un retiro espiritual: es una experiencia transformadora 
              que te invita a caminar junto a otros en busca de sentido, comunidad y 
              renovación interior. Inspirados en el relato bíblico del camino a Emaús, 
              creamos un espacio donde la fe se vive en comunidad.
            </p>
            <p className={styles.description}>
              Durante tres días intensos, vivirás momentos de oración, reflexión, 
              compartir y celebración que marcarán un antes y un después en tu 
              vida espiritual.
            </p>
          </div>
          
          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

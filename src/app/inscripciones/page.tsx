import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import styles from './page.module.css';
import Link from 'next/link';

export default function Inscripciones() {
  return (
    <main>
      <Header />
      <section className={styles.inscripcion}>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>Inscripción a Retiros Emaús</h1>
            <p className={styles.description}>
              Selecciona el tipo de retiro al que deseas inscribirte
            </p>
            
            <div className={styles.options}>
              <div className={styles.optionCard}>
                <h2>Retiro para Hombres</h2>
                <p>Un espacio de hermandad y crecimiento espiritual diseñado específicamente para hombres.</p>
                <Link href="https://forms.gle/XQeDjDN7zx2248RF9" className={styles.optionButton} target="_blank" rel="noopener noreferrer">
                  Elegir Retiro de Hombres
                </Link>
              </div>
              
              <div className={styles.optionCard}>
                <h2>Retiro para Mujeres</h2>
                <p>Un espacio de sororidad y renovación espiritual diseñado específicamente para mujeres.</p>
                <Link href="https://forms.gle/5XjZ6Z6Z6Z6Z6Z6Z6" className={styles.optionButton} target="_blank" rel="noopener noreferrer">
                  Elegir Retiro de Mujeres
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

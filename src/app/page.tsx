import Header from '@/app/components/Header/Header'
import Hero from '@/app/components/Hero/Hero'
import About from '@/app/components/About/About'
import Testimonials from '@/app/components/Testimonials/Testimonials'
import ContactForm from '@/app/components/ContactForm/ContactForm'
import Footer from '@/app/components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

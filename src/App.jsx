import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Integrations from './components/Integrations'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import QuoteForm from './components/QuoteForm'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton mobile />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyUs />
        <Integrations />
        <Process />
        <Team />
        <Testimonials />
        <FAQ />
        <QuoteForm />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

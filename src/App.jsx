import Header from './components/Header'
import Hero from './components/Hero'
import WhatsAppFloat from './components/WhatsAppFloat'
import AboutKaren from './components/AboutKaren'
import Team from './components/Team'
import PracticeAreas from './components/PracticeAreas'
import Emotional from './components/Emotional'
import Differentials from './components/Differentials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <PracticeAreas />
      <AboutKaren />
      <Team />
      <Emotional />
      <Differentials />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

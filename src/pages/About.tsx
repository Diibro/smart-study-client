import AboutHeroSection from "../components/PageSections/AboutHeroSection"
import AboutSection from "../components/PageSections/AboutSection"
import ContactSection from "../components/PageSections/ContactSection"
import ServicesSection from "../components/PageSections/ServicesSection"

const About = () => {
     return (
     <main className="page">
          <AboutHeroSection/>
          <AboutSection page="about" />
          <ServicesSection />
          <ContactSection/>
     </main>
     )
}

export default About
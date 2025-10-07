import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutCodeRangers from './components/AboutCodeRangers';
import About from './components/About';
import Domains from './components/Domains';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Events from './components/Events';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutCodeRangers />
        <About />
        <Domains />
        <Projects />
        <Achievements />
        <Events />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

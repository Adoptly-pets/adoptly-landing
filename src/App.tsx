import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import HowItAllBeganSection from './components/HowItAllBeganSection/HowItAllBeganSection';
import WhoCreatesAdoptly from './components/WhoCreatesAdoptly/WhoCreatesAdoptly';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <HeroSection />
        <AboutUsSection />
        <HowItAllBeganSection />
        <WhoCreatesAdoptly />
      </main>
    </>
  );
}

export default App;

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import HowItAllBeganSection from './components/HowItAllBeganSection/HowItAllBeganSection';

function App() {
  return (

    <>
      <Header />
      <main className="container">
        <HeroSection />
        <AboutUsSection />
      </main>
    </>

    <div>
      <HeroSection />
      <AboutUsSection />
      <HowItAllBeganSection />
    </div>

  );
}

export default App;

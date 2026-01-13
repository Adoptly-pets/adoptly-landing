import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <HeroSection />
        <AboutUsSection />
      </main>
    </>
  );
}

export default App;

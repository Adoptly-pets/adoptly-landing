import StatisticCardsSection from './components/StatisticCardsSection/StatisticCardsSection';
import HeroSection from './components/HeroSection/HeroSection';
import { NUMBER_CARD_DATA } from './constants/NUMBER_CARD_DATE';

function App() {
  return (
    <div>
      <HeroSection />
      <StatisticCardsSection cards={NUMBER_CARD_DATA} />
    </div>
  );
}

export default App;

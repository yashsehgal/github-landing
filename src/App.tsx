import ViewContainer from './components/layouts/view-container';
import HeroSection from './components/sections/hero';

function App() {
  return (
    <div className="app">
      <ViewContainer>
        <main className="hero-section-container">
          <HeroSection />
        </main>
      </ViewContainer>
    </div>
  );
}

export default App;

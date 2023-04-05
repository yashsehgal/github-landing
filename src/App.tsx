import ViewContainer from './components/layouts/view-container';
import HeroSection from './components/sections/hero';
import Productivity from './components/sections/productivity';

import Timeline from './lib/media/section-assets/timeline.svg';

function App() {
  return (
    <div className="app">
      <ViewContainer className="relative">
        <img
          src={Timeline}
          className="absolute -top-72 -left-24 max-md:-left-[70px] -z-10"
        />
        <main className="hero-section-container">
          <HeroSection />
        </main>
        <Productivity />
      </ViewContainer>
    </div>
  );
}

export default App;

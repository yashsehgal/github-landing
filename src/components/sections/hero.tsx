import Section from '../layouts/section';

import { ReactComponent as TimelineFlow } from '../../lib/media/timeline-flow.svg';
import Spacecraft from '../../lib/media/spacecraft.svg';
import CopilotCTA from '../ui/copilot-cta';

const HeroSection: React.FunctionComponent = () => {
  return (
    <Section className="hero-section relative" id="hero">
      <TimelineFlow className="absolute -top-12 max-lg:w-[300px] max-md:w-[240px]" />
      <span className="absolute animate-bounce transition-all duration-slow ease-in-out right-0 top-0 max-2xl:right-6 max-md:top-24 max-md:right-2">
        <img
          src={Spacecraft}
          alt="spacecraft"
          className="max-2xl:w-[320px] max-xl:w-[180px] max-lg:w-[120px] max-md:w-[100px]"
        />
      </span>
      <Section className="absolute hero-section-content-container top-[200px] left-16">
        <CopilotCTA />
        <div className="hero-section-content-body-wrapper my-4">
          <h1 className="leading-snug text-white font-semibold text-[96px]">
            {"Let's build from here"}
          </h1>
        </div>
      </Section>
    </Section>
  );
};

export default HeroSection;

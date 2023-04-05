import Section from '../layouts/section';

import { ReactComponent as TimelineFlow } from '../../lib/media/timeline-flow.svg';
import Spacecraft from '../../lib/media/spacecraft.svg';
import CopilotCTA from '../ui/copilot-cta';
import CodeSectionIcon from '../../lib/media/section-assets/code.svg';
import CodeToProductivitySectionLine from '../../lib/media/section-assets/code-to-productivity.svg';
import { ArrowDownRight } from 'lucide-react';
import {
  KPMGLogo,
  MercedesBenzLogo,
  PAndGLogo,
  PinterestLogo,
  StripeLogo,
  TelusLogo,
} from '../../lib/localdb/trusted-companies';
import Button from '../ui/button';

const HeroSection: React.FunctionComponent = () => {
  return (
    <Section className="hero-section mt-56 relative" id="hero">
      <span className="absolute animate-bounce transition-all duration-slow ease-in-out right-0 -top-42 max-2xl:right-6 max-md:top-24 max-md:right-2">
        <img
          src={Spacecraft}
          alt="spacecraft"
          className="max-2xl:w-[320px] max-xl:w-[180px] max-lg:w-[120px] max-md:w-[100px]"
        />
      </span>
      <Section className="hero-section-content-container top-[140px] left-16">
        <CopilotCTA />
        <div className="hero-section-content-body-wrapper my-4">
          <h1 className="leading-snug text-white font-semibold text-[96px]">
            {"Let's build from here"}
          </h1>
          <p className="leading-[42px] text-gray-500 font-normal text-3xl w-[50ch]">
            {
              'Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.'
            }
          </p>
          <div className="flex flex-row items-center justify-start gap-4 mt-6">
            <Button>Explore all features</Button>
            <Button variant={'outline'}>Start a free enterprise trial</Button>
          </div>
          <div className="trusted-companies-list-wrapper mt-32">
            <h4 className="font-normal text-sm text-gray-500 flex flex-row items-center justify-start gap-1">
              {"Trusted by the world's leading organizations"}
              <ArrowDownRight className="w-4 h-4" />
            </h4>
            <ul className="company-list mt-4 flex flex-row items-center justify-start gap-12">
              <img src={StripeLogo} className="h-[32px]" />
              <img src={PinterestLogo} className="h-[32px]" />
              <img src={KPMGLogo} className="h-[32px]" />
              <img src={MercedesBenzLogo} className="h-[32px]" />
              <img src={PAndGLogo} className="h-[32px]" />
              <img src={TelusLogo} className="h-[32px]" />
            </ul>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default HeroSection;

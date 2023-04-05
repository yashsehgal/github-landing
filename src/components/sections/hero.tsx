import Section from '../layouts/section';

import Spacecraft from '../../lib/media/spacecraft.svg';
import CopilotCTA from '../ui/copilot-cta';
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
      <span className="absolute animate-bounce transition-all duration-slow ease-in-out right-0 -top-48 max-2xl:right-6 max-md:-top-32 max-md:right-2">
        <img
          src={Spacecraft}
          alt="spacecraft"
          className="max-2xl:w-[320px] max-xl:w-[180px] max-lg:w-[120px] max-md:w-[100px]"
        />
      </span>
      <Section className="hero-section-content-container top-[140px] left-16">
        <CopilotCTA />
        <div className="hero-section-content-body-wrapper my-4">
          <h1 className="leading-snug text-white font-semibold text-[96px] max-xl:text-7xl">
            {"Let's build from here"}
          </h1>
          <p className="leading-[42px] text-gray-500 font-normal text-3xl w-[50ch] max-xl:text-2xl max-md:text-lg max-md:w-[42ch]">
            {
              'Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.'
            }
          </p>
          <div className="flex flex-row items-center justify-start gap-4 mt-6 max-md:grid max-md:grid-cols-1">
            <Button>Explore all features</Button>
            <Button variant={'outline'}>Start a free enterprise trial</Button>
          </div>
          <div className="trusted-companies-list-wrapper mt-32 max-sm:mt-12">
            <h4 className="font-normal text-sm text-gray-500 flex flex-row items-center justify-start gap-1">
              {"Trusted by the world's leading organizations"}
              <ArrowDownRight className="w-4 h-4" />
            </h4>
            <ul className="company-list mt-4 flex flex-row items-center justify-start gap-12 max-md:gap-6 max-lg:grid max-lg:grid-cols-5 max-sm:grid-cols-3">
              <img src={StripeLogo} className="h-[32px] max-md:h-[24px]" />
              <img src={PinterestLogo} className="h-[32px] max-md:h-[24px]" />
              <img src={KPMGLogo} className="h-[32px] max-md:h-[24px]" />
              <img
                src={MercedesBenzLogo}
                className="h-[32px] max-md:h-[24px]"
              />
              <img src={PAndGLogo} className="h-[32px] max-md:h-[24px]" />
              <img src={TelusLogo} className="h-[32px] max-md:h-[24px]" />
            </ul>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default HeroSection;

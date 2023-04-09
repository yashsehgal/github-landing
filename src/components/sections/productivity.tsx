import Section from '../layouts/section';
import CodeViewer from '../ui/codeviewer';
import LinkAction from '../ui/link-action';

import PortsSS from '../../lib/media/illo-ports.png';
import OptionsPaletteSS from '../../lib/media/illo-context-menu.png';
import ProductitySectionTimeline from '../../lib/media/section-assets/git-branch-productivity.svg';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Products from './products';

const Productivity: React.FunctionComponent = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Section
      className="productivity-section relative my-[160px] max-xl:mt-[250px] max-lg:mt-[100px] max-md:mt-[90px] max-sm:mt-[92px]"
      id="productivity">
      <div data-aos="fade-right">
        <h2 className="leading-snug text-white font-medium text-xl max-sm:text-base">
          {'Productivity'}
        </h2>
        <p className="mt-4 leading-[42px] text-white font-medium text-4xl w-[50ch] max-md:text-2xl max-sm:text-lg">
          <span className="text-gh-green">
            Accelerate high-quality software <br />
            development.
          </span>{' '}
          Our platform drives <br />
          innovation with tools that boost developer <br />
          velocity.
        </p>
      </div>
      <div className="code-viewer-component-wrapper my-24">
        <CodeViewer />
      </div>
      <div>
        <div data-aos="fade-left">
          <h3 className="text-gray-500 font-medium text-2xl max-md:text-base">
            <span className="text-white">GitHub Codespaces</span> offers a
            complete dev <br />
            environment in seconds, so you can code, <br />
            build, test and open pull requests from any <br />
            repo anywhere.
          </h3>
          <LinkAction className="mt-4">Check out GitHub Codespaces</LinkAction>
        </div>
        <div className="absolute right-40 bottom-12 text-white max-xl:right-20 max-xl:w-[240px] max-:mx-auto max-xl:bottom-36 max-lg:hidden">
          <img
            src={PortsSS}
            width={'340px'}
            className="rounded-md border border-black shadow-xl"
            data-aos="zoom-in-left"
          />
          <img
            src={OptionsPaletteSS}
            className="absolute -right-36 bottom-12 w-[440px] rounded-md border border-gray-900 shadow-xl max-xl:w-[320px]"
            data-aos="zoom-in-right"
          />
        </div>
      </div>
      <div className="did-you-know-section absolute mt-24 flex flex-row items-center justify-start gap-4 w-full -left-12 max-md:-left-6">
        <img src={ProductitySectionTimeline} data-aos="fade-right" />
        <div className="flex flex-col items-start gap-4" data-aos="fade-right">
          <span className="text-gh-green border border-gh-green rounded-full px-3 py-1.5 text-xs">
            {'Did you know?'}
          </span>
          <h1 className="text-gh-green font-medium text-6xl">
            {'22% increase'}
          </h1>
          <p className="text-white font-medium text-xl">
            in developer productivity <br />
            after three years with GitHub<sup>1</sup>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Productivity;

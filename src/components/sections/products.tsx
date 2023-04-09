import Section from '../layouts/section';
import EffectContainer from '../ui/effect-container';
import LinkAction from '../ui/link-action';

import CopilotDemoCodeBlockView from '../../lib/media/section-assets/copilot-demo-code-block-view.svg';
import ActionSS from '../../lib/media/section-assets/illu-actions.webp';
import MobileSS from '../../lib/media/section-assets/illu-mobile.webp';

const Products: React.FunctionComponent = () => {
  return (
    <Section
      className="products-section absolute top-[2550px] w-full grid grid-cols-1 gap-8 "
      id="products">
      <EffectContainer
        className="github-copilot-container"
        id="github-copilot-container">
        <div className="github-copilot-content-body-wrapper flex flex-row items-center justify-between max-lg:flex-col max-lg:gap-12">
          <div className="flex flex-col items-start justify-start gap-10">
            <h3 className="text-gray-500 font-medium text-2xl max-md:text-base">
              <span className="text-white">GitHub Copilot</span> is your AI pair{' '}
              <br />
              programmer that empowers you to <br />
              complete tasks 55% faster by turning <br />
              natural language prompts into coding <br />
              suggestions.
            </h3>
            <LinkAction>{'Meet GitHub Copilot'}</LinkAction>
          </div>
          <div className="copilot-demo-code-block-view-content-wrapper">
            <img src={CopilotDemoCodeBlockView} />
          </div>
        </div>
      </EffectContainer>
      <div className="more-products-container grid grid-cols-2 items-start justify-between gap-8 h-[800px] max-lg:grid-cols-1">
        <EffectContainer
          className="github-actions-container h-[690px] p-0 max-lg:h-[500px]"
          id="github-actions-container">
          <div className="github-actions-content-body-wrapper overflow-hidden relative max-lg:flex-col max-lg:gap-12">
            <div className="flex flex-col items-start justify-start gap-6 p-12">
              <h3 className="text-gray-500 font-medium text-2xl max-md:text-base">
                <span className="text-white">GitHub Actions</span> automates
                your <br />
                build, test, and deployment workflow <br />
                with simple and secure CI/CD.
              </h3>
              <LinkAction>{'Discover GitHub Actions'}</LinkAction>
            </div>
            <img src={ActionSS} className="right-0 bottom-0 m-0 p-0" />
          </div>
        </EffectContainer>
        <EffectContainer
          className="github-mobile-container h-[690px] p-0 flex flex-row justify-between max-lg:h-[500px]"
          id="github-mobile-container">
          <div className="github-mobile-content-body-wrapper overflow-hidden relative max-lg:flex-col max-lg:gap-12">
            <div className="flex flex-col items-start justify-start gap-6 p-12">
              <h3 className="text-gray-500 font-medium text-2xl max-md:text-base">
                <span className="text-white">GitHub Mobile</span> fits your
                projects in <br />
                your pocket, so you never miss a <br />
                beat while on the go.
              </h3>
              <LinkAction>{'Get GitHub Mobile'}</LinkAction>
            </div>
            <img src={MobileSS} className="mt-16 m-0 p-0" />
          </div>
        </EffectContainer>
      </div>
    </Section>
  );
};

export default Products;

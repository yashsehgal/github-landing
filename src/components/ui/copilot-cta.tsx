import CopilotLogo from '../../lib/media/copilot.svg';
import { ChevronRight } from 'lucide-react';

const CopilotCTA: React.FunctionComponent = () => {
  return (
    <div className="copilot-cta w-fit bg-gradient-to-r from-black to-transparent border border-gray-800 p-4 rounded-full flex flex-row items-center justify-start gap-4 cursor-pointer">
      <img src={CopilotLogo} alt="copilot" />
      <span className="cta-content-wrapper flex flex-col items-start justify-between">
        <h3 className="text-white font-semibold text-sm">
          {'Introducing GitHub Copilot X'}
        </h3>
        <p className="text-gray-500 font-medium text-xs">
          {'Your AI pair programmer is levelling up'}
        </p>
      </span>
      <ChevronRight className="text-white w-4 h-4" />
    </div>
  );
};

export default CopilotCTA;

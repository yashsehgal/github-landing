import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Menu,
  Plus,
  RefreshCcw,
} from 'lucide-react';

import { CodeBlock, atomOneDark } from 'react-code-blocks';
import Logger from './logger';

import GlobeOutput from '../../lib/media/globe.svg';
import GHLogo from '../../lib/media/gh-logo.svg';
import { ReactComponent as NotificationIcon } from '../../lib/media/icons/notification.svg';

const CodeViewer: React.FunctionComponent = () => {
  return (
    <div className="code-viewer-component overflow-hidden bg-gh-blocks rounded-md border border-gray-600 h-[600px]">
      <div className="code-viewer-header p-4 flex flex-row items-center justify-between border-b border-gray-700">
        <div className="arrow-action-icon-wrapper flex flex-row items-center justify-start text-gray-500">
          <ChevronLeft />
          <ChevronRight />
        </div>
        <div className="codespace-url-input-wrapper flex flex-row items-center justify-between w-[420px] p-1 rounded bg-gh-primary border border-gray-700">
          <span className="reload-icon-wrapper text-gray-500">
            <RefreshCcw className="w-4 h-4" />
          </span>
          <span className="font-normal text-xs text-white truncate max-md:w-[24ch]">
            {'mona-github-github-g59jpq2w5w7.github.dev'}
          </span>
          <span className="lock-icon-wrapper text-gray-500">
            <Lock className="w-4 h-4 " />
          </span>
        </div>
        <Plus className="text-gray-500" />
      </div>
      <div className="code-viewer-body-wrapper flex flex-row items-start justify-start overflow-hidden">
        <div className="sidebar h-[540px] p-6 border-r border-gray-700 max-lg:p-3">
          <Menu className="text-gray-500 max-lg:w-5 max-lg:h-5" />
        </div>
        <div className="screen-content-container">
          <div className="code-content-wrapper h-[540px] border-r border-gray-700">
            <div className="code-section">
              <div className="code-module-tabs-wrapper pt-6 px-4">
                <span className="module-tab text-xs text-white px-4 py-2 rounded-t-md bg-gh-primary">
                  {'index.html'}
                </span>
                <span className="module-tab text-xs text-white px-4 py-2 rounded-t-md">
                  {'scrpt.js'}
                </span>
                <span className="module-tab text-xs text-white px-4 py-2 rounded-t-md">
                  {'package.json'}
                </span>
              </div>
              <div className="code-container bg-gh-primary text-sm w-[680px] overflow-hidden overflow-x-scroll text-white p-4">
                <code lang="html">
                  <pre>
                    {
                      '<div class="position-absolute width-full color-bg-default" style="bottom: -4rem;">'
                    }
                  </pre>
                  <pre className="px-[8px]">
                    {'<div class="container-xl p-responsive">'}
                  </pre>
                  <pre className="px-[16px]">
                    {
                      '<div class="d-flex flex-justify-center flex-lg-justify-end color-bg-default">'
                    }
                  </pre>
                  <pre className="px-[24px]">
                    {
                      '<div class="col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2 right-lg-n12 '
                    }
                  </pre>
                  <pre className="px-[32px]">{'<picture>'}</pre>
                  <pre className="px-[40px]">
                    {'<source srcset=”astro-mona.webp” type=”image/webp” />'}
                  </pre>
                  <pre className="px-[40px]">
                    {
                      '<img src=”astro-mona.svg” width=”960” width=”967” class=”home-astro-mona" />'
                    }
                  </pre>
                  <pre className="px-[32px]">{'</picture>'}</pre>
                  <pre className="px-[24px]">{'</div>'}</pre>
                  <pre className="px-[16px]">{'</div>'}</pre>
                  <pre className="px-[8px]">{'</div>'}</pre>
                  <pre>{'</div>'}</pre>
                </code>
              </div>
            </div>
            <div className="terminal-content-section">
              <div className="terminal-tabs-wrapper pt-6 px-4 flex flex-row items-center justify-start gap-4 cursor-default">
                <span className="module-tab text-xs text-white rounded-t-md">
                  {'Terminal'}
                </span>
                <span className="module-tab text-xs text-gray-600 rounded-t-md">
                  {'Output'}
                </span>
                <span className="module-tab text-xs text-gray-600 rounded-t-md">
                  {'Problems'}
                </span>
                <span className="module-tab text-xs text-gray-600 rounded-t-md">
                  {'Debug Console'}
                </span>
              </div>
              <div className="py-2 px-4">
                <Logger />
              </div>
            </div>
          </div>
        </div>
        <div className="max-xl:hidden">
          <div className="code-viewer-header p-4 flex flex-row items-center justify-between border-b border-gray-700">
            <Menu className="text-white" />
            <img src={GHLogo} width={'30'} height={'30'} alt="github-logo" />
            <NotificationIcon />
          </div>
          <img src={GlobeOutput} className="w-full h-[520px]" />
        </div>
      </div>
    </div>
  );
};

function CodeComponent({
  code = '',
  language = 'html',
  showLineNumbers = true,
}) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={atomOneDark}
      wrapLines
    />
  );
}

export default CodeViewer;

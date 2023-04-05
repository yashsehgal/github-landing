import { LogProps } from '../../components/ui/logger';

export const getLoggerData = function (): LogProps[] {
  return [
    {
      timestamp: '09:43:36',
      state: 'Starting',
      logText: 'watch-extension:vscode-api-tests',
      after: false,
    },
    {
      timestamp: '09:43:36',
      state: 'Finished',
      logText: 'clean-extension:typescript-language-features',
      after: true,
      afterTime: '2.2 s',
    },
    {
      timestamp: '09:43:36',
      state: 'Starting',
      logText: 'watch-extension:typescript-language-features',
      after: false,
    },
    {
      timestamp: '09:43:36',
      state: 'Finished',
      logText: 'clean-extension:php-language-features',
      after: true,
      afterTime: '384 ms',
    },
    {
      timestamp: '09:43:36',
      state: 'Starting',
      logText: 'watch-extension:php-language-features',
      after: false,
    },
    {
      timestamp: '09:43:40',
      state: 'Finished',
      logText: 'clean-extension:html-language-features-server',
      after: true,
      afterTime: '321 ms',
    },
    {
      timestamp: '09:43:40',
      state: 'Starting',
      logText: 'watch-extension:html-language-features-server',
      after: false,
    },
    {
      timestamp: '09:43:43',
      state: 'Finished',
      logText: 'clean-client',
      after: true,
      afterTime: '7.33 s',
    },
    {
      timestamp: '09:43:43',
      state: 'Starting',
      logText: 'watch-client',
      after: false,
    },
  ];
};

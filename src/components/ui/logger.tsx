import { getLoggerData } from '../../lib/localdb/logger-data';

interface LogProps {
  timestamp?: string;
  state?: 'Starting' | 'Finished';
  logText?: string;
  after?: boolean;
  afterTime?: string;
}

const Logger: React.FunctionComponent = () => {
  return (
    <div className="logs-container">
      {getLoggerData()?.map((log: LogProps, logIndex: number) => (
        <Log {...log} key={logIndex} />
      ))}
    </div>
  );
};

const Log: React.FunctionComponent<LogProps> = ({
  timestamp,
  logText,
  state,
  after = false,
  afterTime,
}) => {
  return (
    <div className="log font-mono text-xs flex flex-row items-center justify-start gap-1">
      <span className="timestamp-wrapper">
        <span className="text-gray-700">{'['}</span>
        <span className="text-gray-500">{timestamp}</span>
        <span className="text-gray-700">{']'}</span>
      </span>
      <span className="state-wrapper">
        <span className="text-gray-500">{state}</span>
      </span>
      <span className="log-text-wrapper">
        <span className="text-gray-500">{"'"}</span>
        <span className="text-blue-400">{logText}</span>
        <span className="text-gray-500">{"'"}</span>
      </span>
      {after && (
        <span className="after-rate-wrapper flex flex-row items-center justify-start gap-1">
          <span className="text-gray-500">{'after'}</span>
          <span className="text-gh-purple">{afterTime}</span>
        </span>
      )}
      {!after && <span className="text-gray-500">{'...'}</span>}
    </div>
  );
};

export default Logger;
export type { LogProps };

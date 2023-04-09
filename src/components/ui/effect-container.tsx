import { useEffect } from 'react';
import { cn } from '../../utils';
import Tilt from 'react-parallax-tilt';

const EffectContainer: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
  useEffect(() => {
    const targetElement = attr?.id ? `#${attr?.id}` : '.effect-container';
    let effectContainer: any = document.querySelector(targetElement);
    effectContainer.addEventListener('mousemove', (e: any) => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      effectContainer.style.setProperty('--x', x + 'px');
      effectContainer.style.setProperty('--y', y + 'px');
    });
  });
  return (
    <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1}>
      <div
        className={cn(
          'effect-container p-12 rounded-md border border-zinc-800 shadow hover:border-transparent',
          className,
        )}
        {...attr}>
        <div className={cn('effect-container-content-wrapper')}>
          {attr?.children}
        </div>
      </div>
    </Tilt>
  );
};

export default EffectContainer;

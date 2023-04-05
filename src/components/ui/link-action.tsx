import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils';

const LinkAction: React.FunctionComponent<
  React.LinkHTMLAttributes<HTMLLinkElement>
> = ({ className, ...attr }) => {
  return (
    <button
      className={cn(
        'hover-underline-animation py-2 bg-transparent text-xl font-semibold text-white flex flex-row items-center justify-center gap-2 hover:gap-3 transition-all',
        className,
      )}>
      {attr?.children}
      <ChevronRight className="w-4 h-4" />
    </button>
  );
};

export default LinkAction;

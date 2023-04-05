import { ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '../../utils';
import { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

const ButtonVariantStyle = {
  primary:
    'bg-white px-6 py-3 rounded-md font-semibold text-gh-primary text-sm border-2 border-transparent hover:shadow-xl hover:shadow-gh-ui-base',
  outline:
    'bg-transparent px-6 py-3 rounded-md font-semibold text-white text-sm border-2 border-gh-purple hover:border-white',
};

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  className,
  ...attr
}) => {
  const [mouse, setMouse] = useState(false);
  return (
    <button
      className={cn(
        'button flex flex-row items-center justify-center gap-2 transition-all',
        ButtonVariantStyle[variant],
        className,
      )}
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      {...attr}>
      {attr?.children}
      <span className="transition-all">
        {!mouse ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ArrowRight className="w-4 h-4" />
        )}
      </span>
    </button>
  );
};

export default Button;

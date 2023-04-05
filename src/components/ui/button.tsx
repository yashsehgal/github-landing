import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

const ButtonVariantStyle = {
  primary:
    'bg-white px-6 py-3 rounded-md font-semibold text-gh-primary text-sm border-2 border-transparent',
  outline:
    'bg-transparent px-6 py-3 rounded-md font-semibold text-white text-sm border-2 border-gh-purple',
};

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  className,
  ...attr
}) => {
  return (
    <button
      className={cn(
        'button flex flex-row items-center justify-center gap-2',
        ButtonVariantStyle[variant],
        className,
      )}
      {...attr}>
      {attr?.children}
      <ChevronRight className="w-4 h-4" />
    </button>
  );
};

export default Button;

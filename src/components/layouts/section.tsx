import { cn } from '../../utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section: React.FunctionComponent<SectionProps> = ({
  className,
  ...attr
}) => {
  return (
    <section className={cn('section my-12', className)} {...attr}>
      {attr?.children}
    </section>
  );
};

export default Section;

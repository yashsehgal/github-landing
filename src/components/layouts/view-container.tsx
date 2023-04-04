import { cn } from '../../utils';

interface ViewContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ViewContainer: React.FunctionComponent<ViewContainerProps> = ({
  className,
  ...attr
}) => {
  return (
    <div className={cn('view-container', className)} {...attr}>
      {attr?.children}
    </div>
  );
};

export default ViewContainer;

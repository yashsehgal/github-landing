import { cn } from '../../utils';
import NavOptions from '../../lib/localdb/navbar-options.json';

import GHLogo from '../../lib/media/gh-logo.svg';
import SlashCommandIcon from '../../lib/media/slash-command-icon.svg';
import { ReactComponent as NotificationIcon } from '../../lib/media/icons/notification.svg';
import { ReactComponent as DropdownArrowIcon } from '../../lib/media/icons/dropdown-arrow.svg';
import { ReactComponent as CreateIcon } from '../../lib/media/icons/create.svg';
import Button from '../ui/button';

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Navbar: React.FunctionComponent<NavbarProps> = ({
  className,
  ...attr
}) => {
  return (
    <nav
      className={cn(
        'navbar px-8 py-4 flex flex-row items-center justify-between',
        className,
      )}
      {...attr}>
        <div className="mobile-nav hidden">
          <Button></Button>
        </div>
      <div className="gh-logo__command-pallete__nav-options-wrapper flex flex-row items-center justify-start gap-4">
        <div className="gh-logo-wrapper">
          <img src={GHLogo} width={'30'} height={'30'} alt="github-logo" className="cursor-pointer" />
        </div>
        <div className="command-palette-input-wrapper rounded bg-gh-ui-base border border-gray-600 px-2 py-1 flex flex-row items-center justify-between w-[260px] max-md:hidden">
          <input
            type="text"
            id="command-palette"
            className="command-palette-input focus:outline-none text-xs text-white placeholder:text-gray-300 bg-transparent"
            placeholder="Search or jump to..."
          />
          <img
            src={SlashCommandIcon}
            width={'16'}
            height={'16'}
            alt="slash-command-icon"
          />
        </div>
        <div className="nav-options-wrapper max-lg:hidden">
          <ul className="nav-options-list flex flex-row items-center justify-center gap-4">
            {NavOptions?.map(
              (
                option: { title: string; path: string },
                optionIndex: number,
              ) => {
                return (
                  <li
                    className="nav-option-item text-sm font-semibold text-white cursor-pointer hover:brightness-90"
                    key={optionIndex}>
                    {option?.title}
                  </li>
                );
              },
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-actions-wrapper flex flex-row items-center justify-end gap-4">
        <span className="notifications-action cursor-pointer hover:brightness-90">
          <NotificationIcon />
        </span>
        <span className="create-action flex flex-row items-center justify-center gap-0.5 cursor-pointer hover:brightness-90 max-lg:hidden">
          <CreateIcon />
          <DropdownArrowIcon />
        </span>
        <span className="profile-action flex flex-row items-center justify-center gap-0.5 cursor-pointer hover:brightness-90 max-md:hidden">
          <img
            src={'https://github.com/yashsehgal.png'}
            alt="profile-picture"
            className="w-6 h-6 rounded-full"
          />
          <DropdownArrowIcon />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

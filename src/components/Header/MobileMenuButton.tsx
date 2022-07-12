export interface MobileMenuButtonProps {
  menuActive: boolean;
  closeMenu: () => void;
  openMenu: () => void;
}

interface MobileMenuButtonLineProps {
  className?: string;
}

function MobileMenuButtonLine({ className = `` }: MobileMenuButtonLineProps) {
  return (
    <span
      className={`absolute block h-px left-1 right-1 bg-neutral-50 transition-all duration-200 transform ${className}`}
    />
  );
}

export default function MobileMenuButton({
  menuActive,
  closeMenu,
  openMenu,
}: MobileMenuButtonProps) {
  return (
    <button
      className="relative w-8 pointer-events-auto h-8 lg:hidden overflow-hidden"
      onClick={menuActive ? closeMenu : openMenu}
    >
      <MobileMenuButtonLine
        className={`top-2 -translate-y-1/2 ${menuActive && `rotate-45 top-4`}`}
      />
      <MobileMenuButtonLine
        className={`top-4 -translate-y-1/2 ${menuActive && `hidden`}`}
      />
      <MobileMenuButtonLine
        className={`bottom-2 translate-y-1/2 ${
          menuActive && `-rotate-45 top-4`
        }`}
      />
      <span className="sr-only">Toggle Menu</span>
    </button>
  );
}

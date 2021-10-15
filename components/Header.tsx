import React, { ReactElement } from 'react';

interface Props {
  children: React.ReactNode;
}

function Header({ children }: Props): ReactElement {
  return (
    <header className={`header-background`}>
      {children}
    </header>
  );
}

export default Header;

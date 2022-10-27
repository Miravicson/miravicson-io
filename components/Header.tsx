import React, { ReactElement } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Header({ children, className }: Props): ReactElement {
  return (
    <header className={`header-background ${className}`}>{children}</header>
  );
}

export default Header;

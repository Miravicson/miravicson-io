import React, { ReactElement } from "react";

interface Props {
  className?: string;
}

function Header({
  children,
  className,
}: React.PropsWithChildren<Props>): ReactElement {
  return (
    <header className={`header-background ${className}`}>{children}</header>
  );
}

export default Header;

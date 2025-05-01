import React, { ReactElement } from 'react';
import Link from 'next/link';

export interface ButtonProps {
  as?: 'link' | 'button';
  className?: string;
  onClick?(): void;
  link?: string;
  icon?: React.ReactElement;
  children: React.ReactNode;
}

function LinkSubComponent({
  children,
  className,
  link,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  link: string;
  icon?: React.ReactElement;
}) {
  return (
    <Link href={link} className={`button ${className}`} role="button">

        <div className={`button-icon`}>{icon}</div>
        <div className={`button-text`}>{children}</div>
    </Link>
  );
}

function ButtonSubComponent({
  children,
  className,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  onClick(): void;
  icon?: React.ReactElement;
}) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <div className={`button-icon`}>{icon}</div>
      <div className={`button-text`}>{children}</div>
    </button>
  );
}

function Button({
  as = 'button',
  className,
  onClick,
  link,
  icon,
  children,
}: ButtonProps): ReactElement {
  if (as === 'link') {
    return (
      <LinkSubComponent link={link} icon={icon} className={className}>
        {children}
      </LinkSubComponent>
    );
  }
  return (
    <ButtonSubComponent onClick={onClick} className={className} icon={icon}>
      {children}
    </ButtonSubComponent>
  );
}

export default Button;

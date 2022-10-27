import React, { ReactElement } from 'react';

interface Props {
  className?: string;
  children?: string;
  constrain?: boolean;
}

function SubDuedHeader({
  className,
  children,
  constrain = true,
}: Props): ReactElement {
  return (
    <h1
      className={`${className} ${
        constrain && 'max-w-md'
      } text-5xl font-bold  self-start lg:text-9xl  text-subdued-elements-color dark:text-d-subdued-elements-color leading-[1] mb-[-0.8rem] sm:mb-[-0.4rem] md:mb-[0.3rem] `}
    >
      {children}
    </h1>
  );
}

export default SubDuedHeader;

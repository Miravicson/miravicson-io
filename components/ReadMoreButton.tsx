import React, { ReactElement } from 'react';
import Link from 'next/link';

interface Props {
  className?: string;
}

function ReadMoreButton({ className }: Props): ReactElement {
  return (
    <button
      className={`flex whitespace-nowrap text-[1rem] transition duration-500 ease-in-out flex-nowrap w-auto space-x-1 font-medium group items-center ${className}`}
      role="button"
    >
      <div className={`button-text transition duration-500 ease-in-out`}>
        Read more
      </div>
      <div
        className={`button-icon transition duration-500 ease-in-out transform group-hover:translate-x-[0.5rem] text-[1rem] font-medium pt-[2px]`}
      >
        →
      </div>
    </button>
  );
}

export default ReadMoreButton;

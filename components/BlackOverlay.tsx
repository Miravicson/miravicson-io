import React, { ReactElement } from 'react';

interface Props {}

export default function BlackOverlay({}: Props): ReactElement {
  return (
    <div className="absolute inset-0 z-10 bg-black overlay bg-opacity-70"></div>
  );
}

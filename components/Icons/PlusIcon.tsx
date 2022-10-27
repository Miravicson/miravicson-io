import * as React from 'react';

function PlusIcon(props) {
  return (
    <svg width={27} height={26} {...props}>
      <g
        transform="translate(1.5 1)"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
      >
        <path d="M12 7v10M17 12H7" strokeLinecap="round" />
        <circle cx={12} cy={12} r={12} />
      </g>
    </svg>
  );
}

export default PlusIcon;

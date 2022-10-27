import React, { ReactElement } from 'react';
import Button, { ButtonProps } from './Button';
import PlusIcon from './Icons/PlusIcon';

type ViewAllButtonProps = Omit<ButtonProps, 'icon'>;

function ViewAllButton({
  children,
  ...otherProps
}: ViewAllButtonProps): ReactElement {
  return (
    <Button icon={<PlusIcon />} {...otherProps}>
      {children}
    </Button>
  );
}

export default ViewAllButton;

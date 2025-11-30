import React, { ReactElement } from "react";
import PlusIcon from "@/components/icons/PlusIcon";
import Button, { ButtonProps } from "./buttons";

type ViewAllButtonProps = Omit<ButtonProps, "icon">;

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

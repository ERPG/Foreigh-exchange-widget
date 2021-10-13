import * as React from 'react';
import { Button as MuiButton } from '@mui/material';

import { useButtonStyles } from './Button.styles';

export interface IButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  name,
  disabled = false,
  children,
  onClick,
}: IButtonProps) => {
  const classes = useButtonStyles();

  return (
    <MuiButton
      fullWidth
      data-fx="fx-button"
      name={name}
      disabled={disabled}
      classes={{ root: classes.root }}
      disableElevation
      size="large"
      onClick={onClick}
      variant="contained"
    >
      <span>{children}</span>
    </MuiButton>
  );
};

export default Button;

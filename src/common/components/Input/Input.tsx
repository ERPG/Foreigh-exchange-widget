import { TextField } from '@material-ui/core';
import React from 'react';

export interface IInputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
}

const Input = ({ value, onChange, label, name }: IInputProps) => {
  return (
    <TextField
      color="primary"
      id="currency-amount"
      label={label}
      name={name}
      inputProps={{ inputMode: 'numeric', 'data-fx': 'fx-amount-input' }}
      value={value}
      onChange={onChange}
      variant="standard"
      size={'small'}
    />
  );
};

export default Input;

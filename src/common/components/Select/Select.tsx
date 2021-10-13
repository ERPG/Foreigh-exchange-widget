import {
  Select as MuiSelect,
  SelectChangeEvent,
  MenuItem,
  FormControl,
} from '@mui/material';
import { CurrencyRate } from '../../../models/ForeighRates';
import { useSelectStyles } from './Select.styles';

export interface ISelectProps {
  value: number;
  onChange: (e: SelectChangeEvent<string>) => void;
  items: CurrencyRate<number>[] | undefined;
  name: string;
}

const Select = ({ value, onChange, items, name }: ISelectProps) => {
  const classes = useSelectStyles();

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
      <MuiSelect
        classes={{ root: classes.root }}
        name={name}
        onChange={onChange}
        inputProps={{
          'aria-label': 'Without label',
          'data-fx': 'fx-currency-selection',
        }}
        value={value.toString()}
        defaultValue={value.toString()}
      >
        {items?.map((elem: CurrencyRate<number>, index: number) => (
          <MenuItem key={index} value={elem.rate.toString()}>
            {elem.currency}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;

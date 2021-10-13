import { Paper, SelectChangeEvent } from '@mui/material';
import Input from '../../common/components/Input/Input';
import Select from '../../common/components/Select/Select';
import { CurrencyRate } from '../../models/ForeighRates';

export interface ICurrencyBoxProps {
  id: string;
  currencyRates: CurrencyRate<number>[] | undefined;
  amount: number;
  handleAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectValue: number;
  handleSelectChange: (event: SelectChangeEvent<string>) => void;
  inputLabel: string;
}

const CurrencyBox = ({
  id,
  inputLabel,
  currencyRates,
  amount,
  handleAmount,
  selectValue,
  handleSelectChange,
}: ICurrencyBoxProps) => {
  return (
    <Paper
      style={{
        textAlign: 'center',
        height: 80,
        lineHeight: '60px',
        margin: 16,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div>
        <Input
          label={inputLabel}
          name={`${id}-input`}
          value={amount}
          onChange={handleAmount}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <Select
          name={`${id}-select`}
          items={currencyRates}
          value={selectValue}
          onChange={handleSelectChange}
        />
      </div>
    </Paper>
  );
};

export default CurrencyBox;

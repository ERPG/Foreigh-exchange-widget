import { Dispatch, useCallback, useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

import CurrencyBox from '../../components/CurrencyBox/CurrencyBox';
import Button from '../../common/components/Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { getForeighRates } from '../../store/ForeighRates/actions/getForeighRates';
import { selectForeighRates } from '../../store/ForeighRates/reducer';
import {
  Currencies,
  CurrencyRate,
  ForeighRates,
} from '../../models/ForeighRates';
import {
  defaultCurrecySelection,
  INITIAL_AMOUNT,
} from '../../constant/ExchangeWrapper';

export type CurrencySelection = {
  baseRate: number;
  currentRate: number;
};

const ExchangeWrapper = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const foreighRates: ForeighRates | undefined =
    useSelector(selectForeighRates);

  useEffect(() => {
    dispatch(getForeighRates());
  }, [dispatch]);

  const handleCurrencySwitch = useCallback(
    (baseR: number, currentR: number) => {
      const newBaseFXRate: CurrencyRate<number> | undefined =
        getFXCurrencyByRate(baseR);
      const newCurrentFXRate: CurrencyRate<number> | undefined =
        getFXCurrencyByRate(currentR);

      SetCurrencies({
        base: newBaseFXRate?.currency,
        current: newCurrentFXRate?.currency,
      });
      dispatch(getForeighRates(newBaseFXRate?.currency));
    },
    [dispatch, foreighRates]
  );

  const [selectValue, SetSelectValue] = useState<CurrencySelection>(
    defaultCurrecySelection
  );

  const handleSelectState = (state: CurrencySelection): void => {
    const { baseRate, currentRate } = state;
    SetSelectValue({
      baseRate,
      currentRate,
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>): void => {
    const rateSelected = Number(event.target.value);
    const { baseRate, currentRate } = selectValue;
    const isCurrentEqualToBase = rateSelected === baseRate;
    const isBaseEqualToCurrent = rateSelected === currentRate;
    if (isCurrentEqualToBase) {
      handleCurrencySwitch(currentRate, rateSelected);
    } else if (isBaseEqualToCurrent) {
      handleCurrencySwitch(rateSelected, baseRate);
    } else {
      const selectName = event.target.name;
      const selectRate = selectName.substring(0, selectName.indexOf('-'));
      const { baseAmount } = amount;
      handleSelectState({ ...selectValue, [selectRate]: rateSelected });
      calculateCurrentAmount(baseAmount, rateSelected);
    }
  };

  const [currencies, SetCurrencies] = useState<{
    base: Currencies | undefined;
    current: Currencies | undefined;
  }>({ base: Currencies.EUR, current: Currencies.USD });

  useEffect(() => {
    if (foreighRates) {
      const { base, current } = currencies;
      const newBaseFXRate: CurrencyRate<number> | undefined =
        getFXRateByCurrency(base);
      const newCurrentFXRate: CurrencyRate<number> | undefined =
        getFXRateByCurrency(current);
      const areRatesValid = newBaseFXRate?.rate === 1 && newCurrentFXRate?.rate;

      if (areRatesValid) {
        handleSelectState({
          baseRate: newBaseFXRate?.rate,
          currentRate: newCurrentFXRate?.rate,
        });
        handleAmountState({
          baseAmount: INITIAL_AMOUNT,
          resultAmount: INITIAL_AMOUNT,
        });
      }
    }
  }, [foreighRates]);

  const getFXCurrencyByRate = (
    rate: number | undefined
  ): CurrencyRate<number> | undefined => {
    return foreighRates
      ?.getExchangeRatesArr()
      .find((elem: CurrencyRate<number>) => elem.rate === rate);
  };

  const getFXRateByCurrency = (
    currency: Currencies | undefined
  ): CurrencyRate<number> | undefined => {
    return foreighRates
      ?.getExchangeRatesArr()
      .find((elem: CurrencyRate<number>) => elem.currency === currency);
  };

  const [amount, handleAmount] = useState<{
    baseAmount: number;
    resultAmount: number;
  }>({ baseAmount: INITIAL_AMOUNT, resultAmount: INITIAL_AMOUNT });

  const handleAmountState = (state: {
    baseAmount: number;
    resultAmount: number;
  }): void => {
    const { baseAmount, resultAmount } = state;
    handleAmount({
      baseAmount,
      resultAmount,
    });
  };

  const calculateCurrentAmount = (amount: number, rate: number): void => {
    const result: number = amount * rate;

    handleAmountState({
      baseAmount: amount,
      resultAmount: result.toFixed(2) as unknown as number,
    });
  };

  const calculateBaseAmount = (amount: number, rate: number): void => {
    const result: number = amount / rate;

    handleAmountState({
      baseAmount: amount,
      resultAmount: result.toFixed(2) as unknown as number,
    });
  };

  const handleInputBaseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputBaseValue: number = Number(
      event.target.value.replace(/[^0-9]/g, '')
    );
    calculateCurrentAmount(inputBaseValue, selectValue.currentRate);
  };

  const handleInputResultChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputResultValue: number = Number(
      event.target.value.replace(/[^0-9]/g, '')
    );
    calculateBaseAmount(inputResultValue, selectValue.currentRate);
  };

  const handleForeighExchangeAmount = () => {};

  return (
    <div style={{ marginTop: 80 }}>
      <CurrencyBox
        id="baseRate"
        currencyRates={foreighRates?.getExchangeRatesArr()}
        amount={amount.baseAmount}
        handleAmount={handleInputBaseChange}
        selectValue={selectValue.baseRate}
        handleSelectChange={handleSelectChange}
        inputLabel={'Sending'}
      />
      <CurrencyBox
        id="currentRate"
        currencyRates={foreighRates?.getExchangeRatesArr()}
        amount={amount.resultAmount}
        handleAmount={handleInputResultChange}
        selectValue={selectValue.currentRate}
        handleSelectChange={handleSelectChange}
        inputLabel={'Receiving'}
      />
      <div style={{ marginTop: 80, padding: 16 }}>
        <Button name="exchange-button" onClick={handleForeighExchangeAmount}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ExchangeWrapper;

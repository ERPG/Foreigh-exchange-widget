import { useState } from 'react';
import { Paper, Switch } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme, WrapperTheme } from '../common/styles/theme';

import ExchangeWrapper from './ExchangeWrapper/ExchangeWrapper';
import { PaletteType } from '@material-ui/core';
import { Box } from '@mui/system';

const App = () => {
  const [themeMode, setThemeMode] = useState<PaletteType>(WrapperTheme.light);
  const [checked, handleCheck] = useState<boolean>(false);

  const customTheme = themeMode === WrapperTheme.light ? lightTheme : darkTheme;

  const handleThemeSwitchChange = (): void => {
    const activeTheme = !checked ? WrapperTheme.light : WrapperTheme.dark;
    handleCheck(!checked);
    setThemeMode(activeTheme);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box>
        <Paper
          style={{
            height: 600,
            marginTop: 60,
            textAlign: 'center',
            margin: '0 auto',
            width: 300,
          }}
          elevation={1}
        >
          <Switch
            checked={checked}
            onChange={handleThemeSwitchChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <ExchangeWrapper />
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default App;

import { makeStyles, Theme } from '@material-ui/core';

export const useSelectStyles = makeStyles((theme: Theme) => ({
  root: {
    ...theme.typography.body1,
  },
}));

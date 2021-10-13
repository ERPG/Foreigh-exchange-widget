import { queryHelpers, buildQueries } from '@testing-library/react';

const testingSelector = 'data-fx';

const queryAllByDataFx = (...args: any) =>
  // @ts-ignore
  queryHelpers.queryAllByAttribute(testingSelector, ...args);

const getMultipleError = (c: any, dataValue: string) =>
  `Found multiple elements with the ${testingSelector} attribute of: ${dataValue}`;
const getMissingError = (c: any, dataValue: string) =>
  `Unable to find an element with the ${testingSelector} attribute of: ${dataValue}`;

const [
  queryByDataFx,
  getAllByDataFx,
  getByDataFx,
  findAllByDataFx,
  findByDataFx,
] = buildQueries(queryAllByDataFx, getMultipleError, getMissingError);

export {
  queryByDataFx,
  queryAllByDataFx,
  getByDataFx,
  getAllByDataFx,
  findAllByDataFx,
  findByDataFx,
};

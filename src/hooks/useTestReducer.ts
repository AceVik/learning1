import { useReducer } from 'react';
import { testReducer, INITIAL_TEST_STATE } from '../reducer/testReducer';

export const useTestReducer = () => {
  return useReducer(testReducer, INITIAL_TEST_STATE);
};
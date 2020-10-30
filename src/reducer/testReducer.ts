
export interface ExampleAction<T = any> {
  type: string;
  payload?: T;
}

export interface TestState {
  valueA: string;
  valueB: number;
}


export const INITIAL_TEST_STATE: TestState = {
  valueA: "init",
  valueB: 0
};

export function testReducer(state: TestState, action: ExampleAction): TestState {
  switch (action.type) {
    case 'update_a':
      return { ...state, valueA: action.payload };
    
    case 'update_b':
      return { ...state, valueB: action.payload };
    
    default:
      return state;
  }
}
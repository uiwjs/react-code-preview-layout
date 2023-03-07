import { useReducer, createContext } from 'react';

export interface InitialState {
  collapse?: boolean;
}

interface ContextValue extends InitialState {
  dispatch?: React.Dispatch<InitialState>;
}
export const initialState: InitialState = {};
export const Context = createContext<ContextValue>({});

export const reducer = (state: InitialState, action: InitialState): InitialState => {
  return { ...state, ...action };
};

export const Provider: React.FC<React.PropsWithChildren<{ value?: InitialState }>> = ({ children, value }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...value });
  return <Context.Provider value={{ ...state, dispatch }}>{children}</Context.Provider>;
};

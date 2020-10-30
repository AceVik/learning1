import React from 'react';
import { useTestReducer } from '../../hooks/useTestReducer';

import './styles.css';

export interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label }: ButtonProps) => {

  const [state, dispatch] = useTestReducer();

  const myOnClick = () => {
    dispatch({ type: "update_a", payload: "hallo " + (new Date()).toISOString() });
    onClick();
  };

  return (
    <button className="my-button" onClick={myOnClick}>{label} + {state.valueA}</button>
  );
};
import React, { useEffect } from 'react';
import { useTestReducer } from '../../hooks/useTestReducer';

import blumenPicture from '../../assets/blumen.jpg';

const pics = [
  'https://previews.123rf.com/images/asaneephoto/asaneephoto1609/asaneephoto160900065/65740414-sch%C3%B6ne-blumen-rosen-.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/71uRjFzW%2BSL._AC_SL1050_.jpg',
  blumenPicture
];

export interface PictureProps {
  srcIndex: 0|1|2;
}

export const Picture: React.FC<PictureProps> = ({ srcIndex }: PictureProps) => {

  const [state, dispatch] = useTestReducer();

  useEffect(() => {
    dispatch({ type: "update_a", payload: "Picture init" });
  }, [dispatch]);

  return (
    <img src={pics[srcIndex]} className="App-logo" alt={state.valueA} />
  );
};
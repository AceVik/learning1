import React, { useState } from 'react';
import './App.css';

import { Button } from './components/Button';
import { Picture } from './components/Picture';

interface AppProps {
  test: string;
}

function App({ test }: AppProps) {

  let [currentPicIndex, setCurrentPicIndex] = useState<number>(0); // [value, function]

  const onButtonClick = () => {
    currentPicIndex++;
    if (currentPicIndex > 2) {
      currentPicIndex = 0;
    }

    setCurrentPicIndex(currentPicIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Picture srcIndex={currentPicIndex as 0 | 1 | 2} />
        <div style={{height: "200px"}}></div>
        <Button onClick={onButtonClick} label="Click me" />
      </header>
    </div>
  );
}

export default App;

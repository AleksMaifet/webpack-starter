import React, { ReactElement, useState } from 'react';

const DEFAULT_VALUE = 0
const BUTTON_TITLE = 'Click'

const App = (): ReactElement => {

  const [count,setCount] = useState<number>(DEFAULT_VALUE)

  const handleCount = () => {
    setCount(prev => prev+1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>{BUTTON_TITLE}</button>
    </>
  );
}

export default App;

import React, { ReactElement, useState } from 'react';

import { ButtonContainer, Container, TitleContainer } from './styles';

const DEFAULT_VALUE = 0;
const BUTTON_TITLE = 'Increase';

const App = (): ReactElement => {
  const [count, setCount] = useState<number>(DEFAULT_VALUE);

  const handleCount = (): void => {
    if (count >= 5) {
      return;
    }
    setCount(prev => prev + 1);
  };

  return (
    <Container>
      <TitleContainer count={count === 5}>{count}</TitleContainer>
      <ButtonContainer type="button" onClick={handleCount}>
        {BUTTON_TITLE}
      </ButtonContainer>
    </Container>
  );
};

export default App;

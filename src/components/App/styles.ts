import styled from 'styled-components';

import { ITitleContainer } from './types';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleContainer = styled.h1<ITitleContainer>`
  color: ${({ count }) => (count ? 'red' : 'black')};
`;

export const ButtonContainer = styled.button``;

import styled from 'styled-components';

export const AppWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Wrapper = styled.main`
  display: grid;
  grid-template: auto / 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: min(90%, 1440px);
  @media (max-width: 480px) {
    grid-template: auto / 1fr;
  }
`;

export const Name = styled.h1`
  font-size: ${({theme}) => theme.fonts.default.sizes.title};
  font-weight: ${({theme}) => theme.fonts.default.weights.bold};
  line-height: ${({theme}) => theme.fonts.default.lineHeight.default};
  grid-template: auto / 1fr 1fr;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.primary};
  word-wrap: break-word;
  word-break: break-all;
`;

export const InfoWrapper = styled.div``;

export const Button = styled.button`
  background-color: ${({theme}) => theme.colors.secondary};
  border: none;
  outline: none;
  padding: .5rem 1rem;
  color: white;
  border-radius: .5rem;
  font-size: 1rem;
  cursor: pointer;
`;

import styled from 'styled-components';

export const Picture = styled.picture`
  overflow: hidden;
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
  min-width: 300px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0,0,0,.3);
`;
export const Img = styled.img`
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
  object-fit: fill;
  max-width: 100%;
`;

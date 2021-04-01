import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const Input = styled.input`
  display: none;
`;

export const Star = styled(FaStar)`
  cursor: pointer;
  transition: color 200ms;
`;

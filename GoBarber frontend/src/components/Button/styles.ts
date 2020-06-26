import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  button {
    background: #ff9000;
    border-radius: 10px;
    border: 0;
    padding: 16px;
    color: #321e38;
    width: 100%;
    font-weight: 500;
    transition: background-color 0.2s;
    margin-top: 16px;

    &:hover {
      background: ${shade(0.2, '#FF9000')};
    }
  }
`;

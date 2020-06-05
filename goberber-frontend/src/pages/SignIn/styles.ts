import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      color: #fff;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }
    }

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

    a {
      color: #f4edeb;
      text-decoration: none;
      display: block;
      margin-top: 24px;

      &:hover {
        color: ${shade(0.2, '#F4edeB')};
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#FF9000')};
    }

    svg {
      margin-right: 0 15px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

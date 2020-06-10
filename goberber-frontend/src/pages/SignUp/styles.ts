import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const apearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(+50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${apearFromRight} 1s;

  form {
    margin-top: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
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
    margin-top: 24px;

    &:hover {
      color: ${shade(0.2, '#FF9000')};
    }

    svg {
      margin-right: 15px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

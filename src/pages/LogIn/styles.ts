import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import { mainPink, almostWhite } from '../../styles/colors';
import backgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  background: linear-gradient(212.14deg, #000a25 4.8%, #1b0f37 78.52%);
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

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 0.8s;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${almostWhite};
      display: block;
      margin-top: 26px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, almostWhite)};
      }
    }
  }

  > a {
    color: ${mainPink};
    display: block;
    margin-top: 26px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, mainPink)};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

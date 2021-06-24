import styled from 'styled-components';
import { Link } from 'react-router-dom';

import backgroundImage from '../../assets/images/Strip-Patterns.png';

export const Wrapper = styled.div`
  background-image: url(${backgroundImage}),
    linear-gradient(128.75deg, #ff5c00 0%, #b600d8 77.96%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;
`;

export const Card = styled.main`
  width: 100%;
  max-width: 640px;
  margin-top: 7em;
  background: var(--white);
  box-shadow: 10px 40px 50px -20px rgb(0 0 0 / 25%);
  border-radius: 16px;
  padding: 4rem;

  form {
    width: 100%;
  }

  @media (max-width: 640px) {
    padding: 2.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: var(--text);
  margin-bottom: 1.5rem;
`;

export const ForgotPassword = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem 0;
`;

export const Line = styled.div`
  width: 140px;
  height: 1px;
  background-color: var(--caramel-800);
`;

export const LineText = styled.span`
  margin: 0 0.5rem;
  color: var(--caramel-800);
`;

export const SignUpContainer = styled.div`
  text-align: start;
`;

export const SignUpButton = styled(Link)`
  text-decoration: underline;
  font-weight: 500;
`;

export const FooterSection = styled.div`
  margin-top: -4rem;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;

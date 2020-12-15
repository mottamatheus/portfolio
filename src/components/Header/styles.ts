import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  max-width: 120rem;
  width: 90%;
  display: flex;
  flex-direction: row;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const TextSection = styled.div`
  color: var(--text-primary);
  align-items: center;
  justify-content: center;
  width: 55%;

  h1 {
    text-align: left;
    font-size: 6.4rem;
  }

  p {
    font-size: 2.4rem;
    color: #969bab;
    font-weight: 400;
    font-family: 'Roboto Mono', monospace;
  }

  span {
    font-size: 6.4rem;
    color: var(--bg-card);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  div {
    margin-top: 4rem;
    font-size: 6.4rem;
    display: inline-block;
    margin-right: 1.5rem;
    transition: all 0.2s ease;

    &:hover {
      color: var(--bg-card);
    }
  }
`;

export const MeSection = styled(motion.div)`
  color: var(--text-primary);
  align-items: center;
  justify-content: center;
  width: 45%;
  display: flex;

  span {
    margin: 0 auto;
    margin-bottom: 30%;

    div {
      padding-left: 1.2rem;
      margin-bottom: 2rem;
    }
  }
`;

export const Technologies = styled.div``;

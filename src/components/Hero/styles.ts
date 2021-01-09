import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  height: 90vh;
  width: 80vw;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative;
`;

export const TextSection = styled(motion.div)`
  color: var(--text-primary);
  width: 45rem;
  top: 25rem;
  align-items: center;
  position: absolute;
  left: 0;
  text-align: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 10px 8px 32px 0 rgba(179, 55, 113, 0.12);
  backdrop-filter: blur(7px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 1rem;
  z-index: 2;

  h1 {
    font-size: 5rem;
    margin-bottom: -0.5rem;
  }
  h3 {
    color: var(--text-secondary);
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    font-family: 'Roboto Mono', monospace;
  }

  p {
    font-size: 1.6rem;
  }
`;

export const MeSection = styled(motion.div)`
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  z-index: 1;
  transition: all 0.2s ease;
  margin-bottom: 9rem;

  &:before {
    border-radius: 50%;
    width: 108%;
    left: -2.5rem;
    padding-bottom: 107%;
    background: linear-gradient(
      -35deg,
      rgba(140, 111, 247, 0.7),
      rgba(255, 34, 102, 0.7)
    );
    box-shadow: 10px 8px 32px 0 rgba(149, 11, 247, 0.12);
    backdrop-filter: blur(7px);
    content: '';
    position: absolute;
    z-index: -1;
  }

  span {
    margin: 0 auto;
    margin-bottom: 30%;

    div {
      margin-bottom: 2rem;
    }
  }
`;

export const Bubble = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: #eee;
  position: absolute;
  bottom: 2rem;
  left: -2.5rem;
  border-radius: 50%;
  width: 11rem;
  height: 11rem;
  background: linear-gradient(
    -45deg,
    rgba(179, 55, 113, 0.85),
    rgba(179, 55, 161, 0.85)
  );
  box-shadow: 10px 8px 32px 0 rgba(179, 55, 113, 0.12),
    inset 0 2px 3px rgba(181, 123, 173, 0.8);
  backdrop-filter: blur(7px);
  z-index: 1;
  align-items: center;
  justify-content: center;

  p {
    margin-bottom: 0.4rem;
  }
`;

export const Technologies = styled(motion.div)`
  color: var(--text-primary);
  width: 40%;
  min-width: fit-content;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 10px 8px 32px 0 rgba(179, 55, 113, 0.12);
  backdrop-filter: blur(7px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  z-index: 2;
  display: flex;
  position: absolute;
  bottom: 13rem;
  right: 2rem;
  justify-content: center;
  align-items: flex-end;
  color: var(--text-primary);
  font-weight: 600;
  font-family: 'Roboto Mono', monospace;

  span {
    text-align: center;
    margin-right: 2rem;
    justify-content: center;
    transition: all 0.3s ease;

    &:last-of-type {
      margin-right: 0;
    }

    svg {
      transition: all 0.3s ease;
      color: var(--text-secondary);
    }

    &:hover .react {
      color: #61dbfb;
    }

    &:hover .typescript {
      color: #007acc;
    }

    &:hover .next {
      color: #111;
    }

    &:hover .javascript {
      color: #f0db4f;
    }

    &:hover .node {
      color: #83ba63;
    }

    p {
      font-size: 1.4rem;
      margin-top: 0.7rem;
    }
  }
`;

export const Scroll = styled(motion.div)`
  position: absolute;
  cursor: pointer;
  font-size: 2rem;
  color: var(--text-primary);
  z-index: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5%;
  margin: 0 auto;

  svg {
    width: 5rem;
    height: 5rem;
    color: var(--text-secondary);
    cursor: pointer;
  }
`;

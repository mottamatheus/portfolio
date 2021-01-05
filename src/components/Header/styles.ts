import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  height: 95vh;
  width: 80vw;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 90vw;
    justify-content: center;
  }
`;

export const TextSection = styled(motion.div)`
  color: var(--text-primary);
  width: 50%;
  align-items: left;
  position: relative;

  h1 {
    font-size: 6.2rem;
    color: var(--text-secondary);
  }

  h3 {
    font-size: 3.2rem;
    color: var(--text-primary);
    font-weight: 400;
    font-family: 'Roboto Mono', monospace;
  }

  p {
    font-family: 'Inter', sans-serif;
    line-height: 2.7rem;
    width: 90%;
    font-weight: 300;
    margin-top: 5rem;
  }

  @media (max-width: 1150px) {
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      width: 100%;
    }

    @media (max-width: 1000px) {
      width: 100%;
    }

    span {
      font-size: 6.4rem;
      color: var(--bg-card);
    }

    div {
      transition: all 0.2s ease;

      &:hover {
        color: var(--bg-card);
      }
    }
  }
`;

export const MeSection = styled(motion.div)`
  width: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.2s ease;
  bottom: 3.6rem;

  img {
    z-index: 3;
  }

  span {
    margin: 0 auto;
    margin-bottom: 30%;
    z-index: 2;

    div {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 1000px) {
    position: absolute;
    visibility: hidden;
    opacity: 1;
    top: 0;
    transition: all 0.2s ease;
    z-index: -1;

    img {
      opacity: 0.1;
      width: 100%;
    }
  }
`;

export const Technologies = styled(motion.div)`
  justify-content: center;
  color: var(--text-primary);
  font-family: 'Roboto Mono', monospace;

  span {
    display: inline-block;
    text-align: center;
    margin-right: 2rem;
    margin-top: 4rem;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: var(--text-secondary);

    svg {
      transition: all 0.3s ease;
    }

    &:hover .react {
      color: #61dbfb;
    }

    &:hover .typescript {
      color: #007acc;
    }

    &:hover .next {
      color: #fff;
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
      font-family: 'Roboto Mono', sans-serif;
      color: var(--text-primary);

      @media (max-width: 500px) {
        font-size: 1rem;
      }
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
